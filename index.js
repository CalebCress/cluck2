function sleep(milis) { return new Promise(res => setTimeout(res, milis)) }

import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { MongoClient } from 'mongodb'

const client = new MongoClient("mongodb://localhost:27017/")
let database
const app = express()
app.use(cors())
const server_port = 4000
let loggedIn = {}
if (fs.existsSync('loggedin.json')) { loggedIn = JSON.parse(fs.readFileSync('loggedin.json')) }

//// INIT SPREADSHEET
import { GoogleSpreadsheet } from "google-spreadsheet"
import { max_row, name_column, lab_hours_column, hours_sheet_id } from './consts.js'
const google_client_secret = JSON.parse(fs.readFileSync('./client_secret.json'))
const doc = await new GoogleSpreadsheet(hours_sheet_id)
await doc.useServiceAccountAuth(google_client_secret)
await doc.loadInfo()
let sheet = doc.sheetsByIndex[0]
async function addLabHours(name, hours) {
    await sheet.loadCells({ startRowIndex: 0, endRowIndex: max_row + 1, startColumnIndex: name_column, endColumnIndex: lab_hours_column + 1 })
    for (let y = 0; y < max_row; y++) {
        const name_cell = sheet.getCell(y, name_column)

        if (name.includes(name_cell.value) && name_cell.value != "" && name_cell.value != " ") {
            const hours_cell = sheet.getCell(y, lab_hours_column)
            let preformula = hours_cell.formula
            if ('d' + preformula == 'dnull') {
                if (hours_cell.value) {
                    preformula = `=${hours_cell.value}`
                } else {
                    preformula = `=0`
                }
            }
            if (hours != 0) {
                hours_cell.formula = `${preformula}+${parseFloat(hours).toFixed(1)}`
                hours_cell.save()
            }
            return
        }

    }
}

////Database Functions
function addCredentials (id, pass, access) {
    if (["TIMECLOCK", "TIMESHEET", "ADMIN"].indexOf(access) == -1) {
        console.log("Acess must be TIMECLOCK, TIMESHEET, or ADMIN")
    }
    else {
        database.collection("credentials").insertOne({_id: id, password: pass, accessLevel: access})
    }
}

function addUser (id, email, clockEvents, inNow) {
    database.collection("users").insertOne({_id: id, email: email, clockEvents: clockEvents, inNow: inNow})
}

function addLog(timestamp, user, clockIn, outstandingLogout) {
    database.collection("log").insertOne({timestamp: timestamp, user: user, clockIng: clockIn, outstandingLogout: outstandingLogout})
}

////API
app.post('/clockapi/clock', (req, res) => {
    try {
        let name = req.query.user
        let loggingin = req.query.clockingIn

        if (!name || !loggingin) { res.status(400).send('Must include name string and loggingin boolean in URL query').end(); return }
        if (loggingin === "true") {
            // Log In
            logMember(name, true)
            if (!loggedIn[name]) { loggedIn[name] = Date.now() }
            res.end()
            try {
                fs.writeFileSync('loggedin.json', JSON.stringify(loggedIn))
            } catch (error) { console.log(error) }
            console.log(`${name} clocked in`)
        } else {
            // Log Out
            if (loggedIn[name]) { // Test to make sure person is logged in
                logMember(name, false)
                res.end()
                addLabHours(name, (Date.now() - loggedIn[name]) / 3600000)
                delete loggedIn[name]
                try {
                    fs.writeFileSync('loggedin.json', JSON.stringify(loggedIn))
                } catch (error) { console.log(error) }
                console.log(`${name} clocked out`)
            } else { res.end() }
        }
    } finally {
        res.send(200)
    }
})

app.get('/void', (req, res) => {
    res.end()
})
app.get('/loggedin', (req, res) => {
    res.send(loggedIn)
    res.end()
})

// Start server
function logMember(name, loggedIn) {
    let logged = JSON.parse(fs.readFileSync("members.log.json"))
    logged.logTotal += 1
    let date = new Date()
    let time = date.getTime()
    logged[logged.logTotal] = {
        member: name,
        loggedIn: loggedIn,
        time: Date.now()
    }
    fs.writeFileSync('members.log.json', JSON.stringify(logged))
    addLog(time, name, loggedIn, false)
}

// Periodically save
(async () => {
    while (true) {
        await sleep(5000)
        try {
            fs.writeFileSync('loggedin.json', JSON.stringify(loggedIn))
        } catch (error) { console.log(error) }
    }
})()


async function run() {
    try{
        await client.connect()
        console.log("connected to database")
        database = client.db("cluck2")
        app.listen(server_port, (err) => { console.log(`listening: ${server_port} | err: ${err !== undefined ? err : "none"}`) })
    } finally {
        console.log("done")
    }
}

run().catch(console.dir)