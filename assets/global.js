console.log("hello again");


// fetch('/?sections=header,footer').then(response=> console.log(response))


fetch('/?sections=header,footer', {headers: {'Accept': 'application/json' }} ).then( response=> console.log(response) )
