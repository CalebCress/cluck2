// const api_server = 'https://team1540.catlin.edu:4000'
const api_server = 'http://localhost:4000'

clockapi = {
    clock: async (name, clockingIn) => {


        await fetch(`${api_server}/clockapi/clock`, {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'include',
            body: `name=${encodeURIComponent(name)}&loggingin=${encodeURIComponent(clockingIn)}`

        }).catch(err => {
            console.log('Error message: ', error);
          });
        // let res = await fetch(`${api_server}/clockapi/clock?name=${encodeURIComponent(name)}&loggingin=${encodeURIComponent(clockingIn)}`)
        // let res = await fetch(api_server+'/clockapi/id?name='+encodeURIComponent(name), {
        //     method: 'GET'
        // })
        // let json = await res.json()
        // let id = json.id;
        // res = await fetch(api_server+'/clock', {
        //     method: 'POST',
        //     mode: 'cors',
        //     body: {
        //         user: id,
        //         clockingIn: clockingIn
        //     }
        // });
        // json = await res.json();
        // console.log(json);
    },
    cluckedIn: async ()=>{
        let res = await fetch(api_server+"/loggedin")
        let json = await res.json()
        console.log(json)
        return json;
    }
    // clockIn: async (name)=>{
    //    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    //        method:'PUT',
    //        mode:'cors',
    //        body:
    //    });
    //    let json = await res.json();
    //    console.log(json)
    // },
    // clockOut: (name)=>{
    //     fetch('https://team1540.org')
    // }
}