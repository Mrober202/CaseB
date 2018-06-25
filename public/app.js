var app = function() {
  var buttonHandle = document.getElementById("submit-button");
  buttonHandle.addEventListener("click", submitButtonHandler);
}

var enquiryBuilder = function(userInput) {
  var url = "https://testk.caseblocks.com/case_blocks/search.json?query=customer_ref:" + userInput + "&auth_token=Rgik46EHz-C7sx5xonCV";
  return url;
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var apiResponse = JSON.parse(jsonString);
  var info = apiResponse[0];
  showResult(apiResponse);
}

var submitButtonHandler = function() {
  var enteredInput = document.getElementById("enter-info");
  var input = enteredInput.value;
  var url = enquiryBuilder(input);
  var result = makeRequest(url, requestComplete);
}

var showResult = function(apiResponse) {
  var list = document.getElementById("info-list");
  list.innerHTML = '';
  console.log(apiResponse[0].cases[0].customer.forename);
  apiResponse.forEach(function(info) {
    var li1 = document.createElement("ul");
    li1.innerText = "Customer name: " + info.cases.customer.forename;

    list.appendChild(li1);
  
  })
}

window.addEventListener('load', app);