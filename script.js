function compute() { //calculate the total amount the user would earn depending on information supplied and tell them how much this would be
    var principal = document.getElementById("principal"); //get the value from the "principal" number input element
    
    if(principal.value < 1) { //check if the pricipal value is a positive number
        alert("Please enter a positive number"); //if not, alert the user
        principal.focus(); //automatically select the pricipal input box for the user
        return; //stop the function
    }

    var rate = document.getElementById("rate").value; //get the value from the "rate" range input element
    var years = document.getElementById("years").value; //get the value from the "years" select input element

    var amount = principal.value * rate * years / 100; //calculate the total amount of money earned from the above parameters

    var year = new Date().getFullYear()+parseInt(years); //calculate the year in which the total amount would be earnt

    var resultElm = document.getElementById("result"); //get the "result" span element
    resultElm.innerHTML = "<br> If you deposit <mark>$" + principal.value + "</mark>,<br> at an interest of <mark>" + rate + "%</mark>.<br> You will recieve an amount of <mark>$" + amount + "</mark>,<br> in the year <mark>" + year + "</mark>."; 
    //tell the user how much money they would earn depending on the amount deposited, the interest rate and how ever many years they would need to wait
}

function updateRate() { //update the percentage rate shown to the user
    var rateValue = document.getElementById("rate").value; //get the value from the "rate" range input element
    document.getElementById("rate_val").innerText = rateValue + "%"; //update the value which is displayed to the user
}

function populateYears(number) { //populate the select input element with a for loop instead of doing it manually
    var elm = document.getElementById("years"); //get the select HTTML element
    var df = document.createDocumentFragment(); //create document fragment to hold the generated options

    if (number){ //make sure a valid value was supplied 
        number.value = 10; //if invalid, set it to 10
    } 

    for(i = 1; i <= number; i++) { //generate an amount of elememts according to the "number" value
        var newOption = document.createElement("option"); //create a new option element
        newOption.value = i; //set the newly generated option element value to the current for loop index
        newOption.appendChild(document.createTextNode(i)); //set the text of the option element to the current loop index
        df.appendChild(newOption); //add the new option element as a child to the document fragment
    }
    elm.appendChild(df); //once finished, add every element to the parent selection element
    elm.value = 5; //set the default drop down value to 5
}
        