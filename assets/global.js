console.log("hello again");


fetch('/?sections=header,footer' ).then( response=> response.json() ).then(response=>console.log(response))

