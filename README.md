# CaseB
web app built in Nodejs with express

When the user gets to the main page, they are prompted to enter a customer reference number between 0-5. This number (userInput) is then used to tailor the URL to hit a specific API to return the related Information. The submitButtonHandler function handles any user input that doesn’t satisfy the spec i.e. not a number or a number less than one or greater than 4.

The programme then makes a XMLHttp GET request to return the information contained in that api. The showResult function then picks out the information required as per the spec.

Once this information is found it is displayed to in a selected html tag as a list.
