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
  if((input < 1) || (input > 4)) {
   window.alert("Please enter enter a number between 0 and 5");
 } else {
  var url = enquiryBuilder(input);
  var result = makeRequest(url, requestComplete);
}
}

var showResult = function(apiResponse) {
  var list = document.getElementById("info-list");
  list.innerHTML = '';
  apiResponse.forEach(function(info) {
    info.cases.forEach(function(nest) {
      if (info.case_type_id == "1"){

        var li1 = document.createElement("ul");
        li1.innerText = "Customer name: " + nest.customer.forename + " " + nest.customer.surname;
        var li2 = document.createElement("li");
        li2.innerText = "Created at: " + nest.created_at.slice(0, 10);
        var li3 = document.createElement("li");
        li3.innerText = "Enquiry source: " + nest.enquiry_source;
        var li4 = document.createElement("li");
        li4.innerText = "Type: " + nest.case_type;

        list.appendChild(li1);
        list.appendChild(li2);
        list.appendChild(li3);
        list.appendChild(li4);
      }
    })
    
  })
}

window.addEventListener('load', app);