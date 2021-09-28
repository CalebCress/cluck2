function sleep(milis) { return new Promise(res => setTimeout(res, milis)) }

import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()
app.use(cors())
const server_port = 4000
let loggedIn = {}
if (fs.existsSync('loggedin.json')) { loggedIn = JSON.parse(fs.readFileSync('loggedin.json')) }

//// INIT SPREADSHEET
import { GoogleSpreadsheet } from "google-spreadsheet";
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

app.get('/clock/', (req, res) => {
    // Get and check args
    let name = req.query.name
    let loggingin = req.query.loggingin
    if (!name || !loggingin) { res.status(400).send('Must include name string and loggingin boolean in URL query').end(); return; }
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
})

app.get('/void', (req, res) => {
    res.end()
})
app.get('/loggedin', (req, res) => {
    res.send(loggedIn)
    res.end()
})

// Start server
app.listen(server_port, (err) => { console.log(`listening: ${server_port} | err: ${err !== undefined ? err : "none"}`) });

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
}

// Periodically save
(async () => {
    while (true) {
        await sleep(5000)
        try {
            fs.writeFileSync('loggedin.json', JSON.stringify(loggedIn))
        } catch (error) { console.log(error) }
    }
})();