var app() = function() {
  var buttonHandle = getElementById("submit-button");
  buttonHandle.addEventListener("click", onSubmit);
}

var enquiryBuilder = function(userInput) {
  var url = "https://testk.caseblocks.com/case_blocks/search.json?query=customer_ref:" + userInput = "&auth_token=Rgik46EHz-C7sx5xonCV";
  return url;
}

var makeRequest = function(url, callback) {
  var request = XMLHttpRequest();
  request.open();
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


