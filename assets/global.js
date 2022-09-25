console.log("hello again");


function handleResponse() {
  JSON.parse(this.responseText);
}
const request = new XMLHttpRequest();
request.addEventListener('load', handleResponse);
request.open('GET', '/?sections=header,footer', true);
request.send();