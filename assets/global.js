console.log("hello again");


// fetch('/?sections=header,footer').then(response=> console.log(response))


async function loadData() {
  const response = await fetch('/?sections=header,footer');
  const data = await response.json();
  console.log(data); 
 
}
loadData();