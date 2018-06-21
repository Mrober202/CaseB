var app() = function() {
  var buttonHandle = getElementById("submit-button");
  buttonHandle.addEventListener("click", onSubmit);
}

var enquiryBuilder = function(userInput) {
  var url = "https://testk.caseblocks.com/case_blocks/search.json?query=customer_ref:" + userInput = "&auth_token=Rgik46EHz-C7sx5xonCV";
  return url;
}