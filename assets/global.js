console.log("hello again");


function handleResponse() {
  console.log(JSON.parse(this.responseText));
}
const request = new XMLHttpRequest();
request.addEventListener('load', handleResponse);
request.open('GET', '/?sections=header,footer', true);
request.send();