function sleep(milis) { return new Promise(res => setTimeout(res, milis)) }

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
import { MongoClient } from 'mongodb'
import session from 'express-session'
import path from 'path'

const client = new MongoClient("mongodb://localhost:27017/")
let database
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(session({
	secret: '1540FlamingChickens',
	resave: true,
	saveUninitialized: true
}))
const server_port = 4000
let loggedIn = {test: "anything"}
const publicDirPath = "./public"

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
function addCredentials (id, pass) {
    database.collection("credentials").insertOne({_id: id, password: pass})
    
}

function addUser (id, email, clockEvents, inNow) {
    database.collection("users").insertOne({_id: id, email: email, clockEvents: clockEvents, inNow: inNow})
}

function addLog(timestamp, user, clockIn, outstandingLogout) {
    database.collection("log").insertOne({timestamp: timestamp, user: user, clockIng: clockIn, outstandingLogout: outstandingLogout})
}

////API
app.get('/ping', (req, res) => {
    res.send("server online")
})

app.post('/clockapi/clock', (req, res) => {
    // if (req.session.loggedin) {
		try {
            let name = req.query.user
            let loggingin = req.query.clockingIn
    
            if (loggingin === "true") {
                // Log In
                logMember(name, true)
                if (!loggedIn[name]) { loggedIn[name] = Date.now() }
                res.end()
                db.collection("users").updateOne({_id: name, inNow: true})
                console.log(`${name} clocked in`)
            } else {
                // Log Out
                if (loggedIn[name]) { // Test to make sure person is logged in
                    logMember(name, false)
                    res.end()
                    addLabHours(name, (Date.now() - loggedIn[name]) / 3600000)
                    delete loggedIn[name]
                    db.collection("users").updateOne({_id: name, inNow: false})
                    console.log(`${name} clocked out`)
                } else { res.end() }
            }
        } finally {
            res.send(200)
        }

	// } else {
	// 	res.send('Please login to view this page!');
	// }
})

app.get('/void', (req, res) => {
    res.end()
})

app.get(['/timesheet', '/loggedin'], (req, res) => {
    res.send(loggedIn)
})

app.post('/auth', function(req, res) {
    var username = req.body.username
    var password = req.body.password
    if (username && password) {
        database.collection("credentials").findOne({_id:username, password}, (error, result) => {
            if (result != null) {
                req.session.loggedin = true
                req.session.username = username
                res.redirect('/admin')
            } else {
                res.send('Incorrect Username and/or Password!')
            }			
        })
    } else {
        res.send('Please enter Username and Password!')
    }
})

//webserver
app.get('/admin', (req, res) => {
    if (req.session.loggedin) {
		res.sendFile(path.resolve('./pages/admin.html'))
	} else {
		res.redirect('/login')
	}
})

app.get('/timeclock', (req, res) => {
    if (req.session.loggedin) {
		res.sendFile(path.resolve('./pages/timeclock.html'))
	} else {
		res.redirect('/login')
	}
})


app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./pages/login.html'))
})

app.use(express.static(publicDirPath))

//Logging
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
    addLog(time, name, loggedIn, false)
}

//start server
async function run() {
    try{
        console.log("connecting to database...")
        await client.connect()
        database = client.db("cluck2")
        loggedIn = database.collection("users").find({inNow: true})
        app.listen(server_port, (err) => { console.log(`listening: ${server_port} | err: ${err !== undefined ? err : "none"}`) })
    } finally {
        console.log("connection complete")
    }

}

run().catch(console.dir)