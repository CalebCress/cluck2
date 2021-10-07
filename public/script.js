const members = [{"name":"Adam Li","firstname":"Adam","img":"https://avatars.slack-edge.com/2021-09-15/2501695830132_93fce40b75ee56d40a25_original.png"},{"name":"Akira van de Groenendaal","firstname":"Akira"},{"name":"Alex Johnston ","firstname":"Alex","img":"https://avatars.slack-edge.com/2021-09-12/2475292739558_f388f4a4f51be9c4ef91_original.jpg"},{"name":"Alicia Ye","firstname":"Alicia"},{"name":"Alyssa Sanchez","firstname":"Alyssa","img":"https://avatars.slack-edge.com/2020-09-19/1398817767920_150b505a0cb0d4cf441b_original.png"},{"name":"Andrew Uan-Zo-li","firstname":"Andrew"},{"name":"Annika Sirtori","firstname":"Annika","img":"https://avatars.slack-edge.com/2021-09-15/2508887549297_356ed1cf843843a1f19d_original.png"},{"name":"Ariana Bajaj","firstname":"Ariana"},{"name":"Audrey Hebert","firstname":"Audrey","img":"https://avatars.slack-edge.com/2019-09-15/748343260322_ceae80e525b81d5350f1_original.jpg"},{"name":"Audrey Tsai","firstname":"Audrey","img":"https://avatars.slack-edge.com/2021-09-09/2498459450224_b8abf93a083a889c1506_original.jpg"},{"name":"Ben Halvorson","firstname":"Ben","img":"https://avatars.slack-edge.com/2021-09-14/2487305497829_d3a1220701d1ddcb7f59_original.png"},{"name":"Ben Rosenfeld","firstname":"Ben","img":"https://avatars.slack-edge.com/2020-09-03/1342040732866_4b54a08787601a913d6c_original.jpg"},{"name":"Caleb Cress","firstname":"Caleb","img":"https://avatars.slack-edge.com/2020-09-17/1370961841762_1603123934d81b529254_original.png"},{"name":"Charlotte Long","firstname":"Charlotte"},{"name":"Chloe Jahncke","firstname":"Chloe","img":"https://avatars.slack-edge.com/2021-05-03/2039352469137_9f963cb788ab7f985883_original.png"},{"name":"Coco Pike","firstname":"Coco","img":"https://avatars.slack-edge.com/2021-09-10/2464002845991_f7f84ef87cfa276ebb31_original.png"},{"name":"Cynthia Yang","firstname":"Cynthia","img":"https://avatars.slack-edge.com/2021-05-03/2050540284208_fdbd75ca9fd2205f9b7b_original.jpg"},{"name":"Darby Palmer ","firstname":"Darby","img":"https://avatars.slack-edge.com/2021-09-09/2475007334307_b70454a829f3662fb4ef_original.png"},{"name":"Derek Choi","firstname":"Derek","img":"https://avatars.slack-edge.com/2020-09-17/1383573191329_07e2d84f96fd67be1e33_original.jpg"},{"name":"Dominic Nearn","firstname":"Dominic","img":"https://avatars.slack-edge.com/2021-09-09/2487391596769_40f0a566db5cce8de24c_original.jpg"},{"name":"Efe Avci","firstname":"Efe","img":"https://avatars.slack-edge.com/2021-09-15/2480699129095_52f52118bc291f8a610f_original.jpg"},{"name":"Eliza Robinson","firstname":"Eliza"},{"name":"Emily Zhang","firstname":"Emily","img":"https://avatars.slack-edge.com/2020-09-02/1364015758016_a40db31661c4eb927898_original.jpg"},{"name":"Grace Chen","firstname":"Grace","img":"https://avatars.slack-edge.com/2020-09-22/1373818790102_1068436dae512041b7c9_original.jpg"},{"name":"Grace Mueller","firstname":"Grace","img":"https://avatars.slack-edge.com/2021-09-15/2507975505473_f2f0a71944b53151f630_original.png"},{"name":"Harper Davis","firstname":"Harper","img":"https://avatars.slack-edge.com/2021-09-17/2505806731123_3d285602380aaacf666e_original.png"},{"name":"Holland Swan","firstname":"Holland","img":"https://avatars.slack-edge.com/2021-09-13/2490638290068_4db45d762587aa525a30_original.png"},{"name":"Isabella Ho","firstname":"Isabella","img":"https://avatars.slack-edge.com/2021-09-13/2500042743393_86ab5f1fbbdd120d5ee6_original.png"},{"name":"Jack Sturman","firstname":"Jack","img":"https://avatars.slack-edge.com/2020-09-22/1374479432102_1e08925df1791a8bc1cc_original.jpg"},{"name":"Jeffrey Burt","firstname":"Jeffrey","img":"https://avatars.slack-edge.com/2018-11-27/491176775430_228464d917dc08b0fd06_original.png"},{"name":"Julia Kiaer","firstname":"Julia","img":"https://avatars.slack-edge.com/2020-09-03/1355336524401_fe640cd1e3565ebc9778_original.jpg"},{"name":"Kai Sales","firstname":"Kai","img":"https://avatars.slack-edge.com/2021-09-09/2460971682247_b0f2b16912978ffe0cc8_original.png"},{"name":"Kai Wolahan","firstname":"Kai","img":"https://avatars.slack-edge.com/2021-09-09/2476043708914_321a9ca9294ab8860ee0_original.png"},{"name":"Kaz Malhotra","firstname":"Kaz","img":"https://avatars.slack-edge.com/2020-09-03/1342409318274_506e11173039a6a9e80e_original.png"},{"name":"Leon Liu","firstname":"Leon","img":"https://avatars.slack-edge.com/2021-09-15/2508063160785_695b69ae4807b111afe5_original.png"},{"name":"Lilah Blank","firstname":"Lilah","img":"https://avatars.slack-edge.com/2021-09-09/2481766922868_e79943c0ef91d22f4568_original.jpg"},{"name":"Lisa Yoshida","firstname":"Lisa","img":"https://avatars.slack-edge.com/2021-09-15/2495547505106_91a74ebac6d494738898_original.jpg"},{"name":"Lucas Holliday","firstname":"Lucas","img":"https://avatars.slack-edge.com/2020-09-16/1392697682224_1eb7c768cc06305cbc87_original.jpg"},{"name":"Maddox Gumboc","firstname":"Maddox","img":"https://avatars.slack-edge.com/2021-09-13/2497815626225_bf368d78bec46e49458d_original.png"},{"name":"Matthew Vestergaard","firstname":"Matthew","img":"https://avatars.slack-edge.com/2020-09-29/1381268964007_8a14cbcd57eb82afe44c_original.jpg"},{"name":"Micah Powch","firstname":"Micah","img":"https://avatars.slack-edge.com/2021-03-13/1868766078593_508dc7ffa7d8b83c1395_original.png"},{"name":"Nate Sales","firstname":"Nate","img":"https://avatars.slack-edge.com/2021-09-08/2455661582759_a3d53c03d781a6bdca7b_original.jpg"},{"name":"Nathan Chen","firstname":"Nathan","img":"https://avatars.slack-edge.com/2020-09-19/1387518091041_508ba22f5537e931dded_original.jpg"},{"name":"Nico Howlett","firstname":"Nico","img":"https://avatars.slack-edge.com/2021-09-16/2485802285015_0f9ca158803248d0f67b_original.jpg"},{"name":"Parth Mahajan","firstname":"Parth"},{"name":"Prisha Garg","firstname":"Prisha","img":"https://avatars.slack-edge.com/2021-09-13/2498509823457_d2148aaf0c4152f6023a_original.png"},{"name":"Rachel Cohrs","firstname":"Rachel","img":"https://avatars.slack-edge.com/2020-12-11/1565978044325_916f29de09bc70e99b7f_original.jpg"},{"name":"Raul Rendon Benitez","firstname":"Raul","img":"https://avatars.slack-edge.com/2021-09-15/2520315831040_c33392dbf9c46e869769_original.png"},{"name":"Riddhi Mahajan","firstname":"Riddhi","img":"https://avatars.slack-edge.com/2021-09-13/2483956854789_6a87fba5597ad966171a_original.png"},{"name":"Sana Shah","firstname":"Sana","img":"https://avatars.slack-edge.com/2020-07-21/1255056337923_0b3b14947439f95c88c0_original.jpg"},{"name":"Seth Knights","firstname":"Seth","img":"https://avatars.slack-edge.com/2021-09-09/2481817039956_34e1b5d9d79fdf07f6cb_original.png"},{"name":"Sienna Cai","firstname":"Sienna"},{"name":"Sienna Cooper","firstname":"Sienna","img":"https://avatars.slack-edge.com/2021-09-09/2476002216307_92c6068a42c24c2a6ea4_original.jpg"},{"name":"Teddy Ratliff","firstname":"Teddy","img":"https://avatars.slack-edge.com/2021-09-11/2474146218470_492ef3203312219ba5ab_original.png"},{"name":"William Spry","firstname":"William","img":"https://avatars.slack-edge.com/2021-09-09/2472917179525_7851e4b2a1e4a8eecb86_original.png"},{"name":"Zach Rutman","firstname":"Zach"}]
let buttonJustPressed = false;
const clock = clockapi.clock
const cluckedIn = clockapi.cluckedIn

const buttonStates = {
    false: [
        { styleName: 'filter', val: 'grayscale(100%)' },
        { styleName: 'box-shadow', val: 'inset 0 0 0 1000px rgba(255, 255, 255, 0.4), 0px 0px 10px rgba(255, 0, 0,.5)' },
    ],
    true: [
        { styleName: 'filter', val: 'grayscale(0%)' },
        { styleName: 'box-shadow', val: 'inset 0 0 0 1000px rgba(255, 255, 255, 0.0), 0px 0px 15px 7px rgb(0, 255, 136)' },
    ]
}

function render() {
    // Calculate & Set grid size
    root = Math.sqrt(members.length)
    wid = Math.ceil(root)
    hei = Math.round(root)
    document.documentElement.style.setProperty('--width', wid)
    document.documentElement.style.setProperty('--height', hei)


    // Setup Randomized Button Style Options
    const horizPos =
    {
        left: [{ styleName: 'right', val: 'auto' }, { styleName: 'border-top-left-radius', val: 0 }, { styleName: 'border-bottom-left-radius', val: 0 },],
        right: [{ styleName: 'left', val: 'auto' }, { styleName: 'border-top-right-radius', val: 0 }, { styleName: 'border-bottom-right-radius', val: 0 },],
        center: []
    }
    const verticalPos =
    {
        top: [{ styleName: 'border-top-right-radus', val: 0 }, { styleName: 'border-top-left-radus', val: 0 },],
        bottom: [{ styleName: 'bottom', 'val': 0 }, { styleName: 'border-bottom-right-radius', val: 0 }, { styleName: 'border-bottom-left-radius', val: 0 },]
    }
    const font =
    {
        gilroy: [{ styleName: 'font-family', val: 'gilroy' }],
        cocogoose: [{ styleName: 'font-family', val: 'cocogoose' }],
        tcm: [{ styleName: 'font-family', val: 'tcm' }],
        basics: [{ styleName: 'font-family', val: 'basics-serif' }],
    }
    const styleCatagories = [horizPos, verticalPos, font]

    // Make member buttons 
    members.forEach(member => {
        // Init button
        memberButton = document.createElement('person-button');
        memberButton.fullname = member.name;
        memberButton.id = member.fullname

        // Set click toggle
        memberButton.onclick = (click) => {
            buttonJustPressed = true;
            console.log(click)
            // Go up path to find button object
            click.path.forEach(button => {
                if (button.className != 'button-in') { return }
                // Toggle logged in             
                button.loggedIn = !button.loggedIn
                // Update style
                buttonStates[button.loggedIn].forEach(styleSpec => {
                    button.style.setProperty(styleSpec.styleName, styleSpec.val)
                })
                // Cluck API Call
                clock(button.fullname, button.loggedIn)
            })
        }

        // Add name text
        text = document.createElement('person-name')
        text.className = 'button-text'
        text.innerHTML = member.firstname

        // Randomize mix and match text styles
        styleCatagories.forEach(styleCatagory => {
            let styleOptions = Object.values(styleCatagory)
            if (styleOptions.length == 0) { return }
            let toSet = styleOptions[Math.floor(Math.random() * styleOptions.length)]
            toSet.forEach(attribute => {
                text.style.setProperty(attribute.styleName, attribute.val)
            })
        })

        // Do other adding and styling things
        memberButton.appendChild(text)
        memberButton.style.setProperty('background-image', `url(${member.img})`)
        if (!member.img) { memberButton.style.setProperty('background-image', `url(img/defpic.jpg)`) }
        memberButton.className = 'button-in'

        // Add button
        document.getElementById('button-grid').appendChild(memberButton)
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

render()

async function start() {
    while (true) {
        // Get data and update buttons
        // Query data to map of { Name:TimeCluckedIn } 
        try {
            let membersIn = await cluckedIn()
            // Update buttons
            let buttons = document.getElementsByTagName('person-button')
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i]
                button.loggedIn = button.fullname in membersIn
                buttonStates[button.loggedIn].forEach(styleSpec => {
                    button.style.setProperty(styleSpec.styleName, styleSpec.val)
    
                })
            }
        } catch (err) { console.log(err) }
        await sleep(5000)
        while (buttonJustPressed) {
            buttonJustPressed = false;
            await sleep(2000);
        }
    }
}

start()