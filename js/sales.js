

let reset= document.getElementsByTagName('button')[0];
let add= document.getElementsByTagName('button')[1];
let submit= document.getElementsByTagName('button')[2];
let printNow = document.getElementsByTagName('button')[3];

printNow.disabled = true;

//ANSWER OR SUBMIT FUNCTION
const totalPriceFunc = () => {

let totalPrice = document.getElementsByTagName('input')[0];
let balance = document.getElementsByTagName('input')[1];
let product = document.getElementsByTagName('input')[2];
let OutputProduct = document.getElementsByTagName('input')[2].value;
OutputProduct = OutputProduct.toUpperCase();
let newPrice = document.getElementsByTagName('input')[0].value;
let productPrice= document.getElementsByTagName('input')[3];
let numberPurchased= document.getElementsByTagName('input')[4];
let amountPaid= document.getElementsByTagName('input')[5];

let theDate = new Date()
let theYear = theDate.getFullYear();
theYear = theYear.toString()
theYear = theYear.substr(2, 4)
 let theMonth = theDate.getMonth() + 1 + "/";
 let theDay = theDate.getDate() + "/";
 let date = `DATE: ${theDay}${theMonth}${theYear}`
 let theHour = theDate.getHours();
 let theMinutes = theDate.getMinutes();
 let time;

 if(theMinutes < 10){
theMinutes = "0" + theMinutes;
 };

 if(theHour === 0){
     theHour = theHour + 12;
     time = "TIME:" + " " + theHour + ":" + theMinutes + " " + "AM";
 } else if(theHour > 0 && theHour < 12){
     time = "TIME:"+ " " + theHour + ":" + theMinutes + " " + "AM";
 } else {
    theHour = theHour - 12;
     time = "TIME:" + " " + theHour + ":" + theMinutes + " " + "PM";
 };

if(newPrice.includes("+", 1) && productPrice.value !== "" && numberPurchased.value !== "" && product.value !== "" && isNaN(productPrice.value)===false  && isNaN(numberPurchased.value)===false  && isNaN(amountPaid.value)===false){
    let generate = confirm('Is this your last product addition? if you proceed, the receipt would be generated. CLICK OK TO CONTINUE or CANCEL TO RETURN');
    if(generate){
    let removePlus = newPrice.replace("+", "");
    let price = parseInt(removePlus);
    let newProductPrice = parseInt(productPrice.value);
    let newNumberPurchased = parseInt(numberPurchased.value);
    let newAmountPaid = parseInt(amountPaid.value);
    let answer = price + newProductPrice * newNumberPurchased;
    let itemPrice = newProductPrice * newNumberPurchased;

    totalPrice.value = answer;

    if (isNaN(newAmountPaid) === false && newAmountPaid !== "") {
        let balanceReturn = newAmountPaid - answer;
        if(balanceReturn > 0){
            balance.value = balanceReturn;
        } else {
            balance.value = "NO BALANCE";
        }
    };
    
    let table = document.getElementsByTagName("table")[0];

    let tableRow = document.createElement("tr");

    let columnOne = document.createElement("td");
    let columnTwo = document.createElement("td");
    let columnThree = document.createElement("td");
    let columnFour = document.createElement("td");

    let itemBought = document.createTextNode(OutputProduct);
    let theItemPrice = document.createTextNode(newProductPrice);
    let itemNumber = document.createTextNode(newNumberPurchased);
   let priceItem = document.createTextNode(itemPrice);

   columnOne.appendChild(itemBought);
   columnTwo.appendChild(theItemPrice);
   columnThree.appendChild(itemNumber);
   columnFour.appendChild(priceItem);

   tableRow.appendChild(columnOne);
   tableRow.appendChild(columnTwo);
   tableRow.appendChild(columnThree);
   tableRow.appendChild(columnFour);

   table.appendChild(tableRow);

   let finalTableRow = document.createElement("tr");

   let firstColumnOne = document.createElement("td");
   let firstColumnTwo = document.createElement("td");
   let firstColumnThree = document.createElement("td");
   let firstColumnFour = document.createElement("td");

   let amountText = document.createTextNode("AMOUNT PAID:");
   let theValue = document.createTextNode(newAmountPaid);
   let totalPriceValue = document.createTextNode("TOTAL PRICE:");
  let thePriceItem = document.createTextNode(totalPrice.value);

   firstColumnOne.appendChild(amountText);
   firstColumnTwo.appendChild(theValue);
   firstColumnThree.appendChild(totalPriceValue);
   firstColumnFour.appendChild(thePriceItem);

   finalTableRow.appendChild(firstColumnOne);
   finalTableRow.appendChild(firstColumnTwo);
   finalTableRow.appendChild(firstColumnThree);
   finalTableRow.appendChild(firstColumnFour);

   table.appendChild(finalTableRow);

   let balanceRow = document.createElement("tr");

   let balanceColumnOne = document.createElement("td");
   let balanceColumnTwo = document.createElement("td");
   let dateColumnThree = document.createElement("td");
   let timeColumnFour = document.createElement("td");
   
   let balanceText = document.createTextNode("BALANCE:");
   let thePrice = document.createTextNode(balance.value);
   let ourDate =  document.createTextNode(date);
   let ourTime =  document.createTextNode(time);

   balanceColumnOne.appendChild(balanceText);
   balanceColumnTwo.appendChild(thePrice);
   dateColumnThree.appendChild(ourDate);
   timeColumnFour.appendChild(ourTime);

   balanceRow.appendChild(balanceColumnOne);
   balanceRow.appendChild(balanceColumnTwo);
   balanceRow.appendChild(dateColumnThree);
   balanceRow.appendChild(timeColumnFour);

   table.appendChild(balanceRow);

   product.value = "";
   productPrice.value = "";
   numberPurchased.value = "";
   totalPrice.value = "";
   balance.value = "";
   amountPaid.value = "";

   product.style.pointerEvents = "none";
   productPrice.style.pointerEvents = "none";
   numberPurchased.style.pointerEvents = "none";
   amountPaid.style.pointerEvents = "none";

   add.disabled = true;
   submit.disabled = true;
   printNow.disabled = false;
    };
} else if(newPrice.includes("+", 1) && (productPrice.value === "" || numberPurchased.value === "" || product.value === "")){
alert('ERRROR!! THERE IS A PLUS SIGN AT THE END OF THE TOTAL PRICE, USE THE SUBMIT BUTTON TO ADD THE LAST PRODUCT');
} else if(productPrice.value === "" || numberPurchased.value === "" || product.value === "" || amountPaid.value === ""){
alert("FILL THE FIELDS REQUIRED");
} else {

    let price = parseInt(newPrice);
    let newProductPrice = parseInt(productPrice.value);
    let newNumberPurchased = parseInt(numberPurchased.value);
    let newAmountPaid = parseInt(amountPaid.value);

    if(newAmountPaid === "" || newAmountPaid === NaN ){
document.getElementsByTagName('input')[5].placeholder = "ENTER AMOUNT PAID";
} else if(newNumberPurchased === "" || newNumberPurchased === NaN){
    document.getElementsByTagName('input')[4].placeholder = "Input a Number of item";
}  else if(newProductPrice === "" || newProductPrice === NaN ){
    document.getElementsByTagName('input')[4].placeholder = "Input a Number of item";
}  else {
    let answer = newProductPrice * newNumberPurchased;
    let itemPrice = newProductPrice * newNumberPurchased;

    totalPrice.value = answer;

    if (isNaN(newAmountPaid) === false && newAmountPaid !== "") {
        let balanceReturn = newAmountPaid - answer;
        if(balanceReturn > 0){
            balance.value = balanceReturn;
        } else {
            balance.value = "NO BALANCE";
        }
    };
    
    let table = document.getElementsByTagName("table")[0];

    let tableRow = document.createElement("tr");

    let columnOne = document.createElement("td");
    let columnTwo = document.createElement("td");
    let columnThree = document.createElement("td");
    let columnFour = document.createElement("td");

    let itemBought = document.createTextNode(OutputProduct);
    let theItemPrice = document.createTextNode(newProductPrice);
    let itemNumber = document.createTextNode(newNumberPurchased);
   let priceItem = document.createTextNode(itemPrice);

   columnOne.appendChild(itemBought);
   columnTwo.appendChild(theItemPrice);
   columnThree.appendChild(itemNumber);
   columnFour.appendChild(priceItem);

   tableRow.appendChild(columnOne);
   tableRow.appendChild(columnTwo);
   tableRow.appendChild(columnThree);
   tableRow.appendChild(columnFour);

   table.appendChild(tableRow);

   let finalTableRow = document.createElement("tr");

   let firstColumnOne = document.createElement("td");
   let firstColumnTwo = document.createElement("td");
   let firstColumnThree = document.createElement("td");
   let firstColumnFour = document.createElement("td");

   let amountText = document.createTextNode("AMOUNT PAID:");
   let theValue = document.createTextNode(newAmountPaid);
   let totalPriceValue = document.createTextNode("TOTAL PRICE:");
  let thePriceItem = document.createTextNode(totalPrice.value);

   firstColumnOne.appendChild(amountText);
   firstColumnTwo.appendChild(theValue);
   firstColumnThree.appendChild(totalPriceValue);
   firstColumnFour.appendChild(thePriceItem);

   finalTableRow.appendChild(firstColumnOne);
   finalTableRow.appendChild(firstColumnTwo);
   finalTableRow.appendChild(firstColumnThree);
   finalTableRow.appendChild(firstColumnFour);

   table.appendChild(finalTableRow);

   let balanceRow = document.createElement("tr");

   let balanceColumnOne = document.createElement("td");
   let balanceColumnTwo = document.createElement("td");
   let dateColumnThree = document.createElement("td");
   let timeColumnFour = document.createElement("td");
   
   let balanceText = document.createTextNode("BALANCE:");
   let thePrice = document.createTextNode(balance.value);
   let ourDate =  document.createTextNode(date);
   let ourTime =  document.createTextNode(time);

   balanceColumnOne.appendChild(balanceText);
   balanceColumnTwo.appendChild(thePrice);
   dateColumnThree.appendChild(ourDate);
   timeColumnFour.appendChild(ourTime);

   balanceRow.appendChild(balanceColumnOne);
   balanceRow.appendChild(balanceColumnTwo);
   balanceRow.appendChild(dateColumnThree);
   balanceRow.appendChild(timeColumnFour);

   table.appendChild(balanceRow);

   product.value = "";
   productPrice.value = "";
   numberPurchased.value = "";
   totalPrice.value = "";
   balance.value = "";
   amountPaid.value = "";

   product.style.pointerEvents = "none";
   productPrice.style.pointerEvents = "none";
   numberPurchased.style.pointerEvents = "none";
   amountPaid.style.pointerEvents = "none";

   add.disabled = true;
   submit.disabled = true;
   printNow.disabled = false;
    };
};
};
submit.addEventListener('click', totalPriceFunc);

//ADDITION FUNCTION
const addition = () => {
    let totalPrice = document.getElementsByTagName('input')[0];
    let balance = document.getElementsByTagName('input')[1];
    let product = document.getElementsByTagName('input')[2].value;
    product = product.toUpperCase();
    let productPrice= document.getElementsByTagName('input')[3];
    let numberPurchased= document.getElementsByTagName('input')[4];
    let amountPaid= document.getElementsByTagName('input')[5];
  
    if(totalPrice.value === "" && productPrice.value !== "" && numberPurchased.value !== "" && product !== "" && isNaN(productPrice.value)===false  && isNaN(numberPurchased.value)===false  && isNaN(amountPaid.value)===false){
        let newProductPrice = parseInt(productPrice.value);
        let newNumberPurchased = parseInt(numberPurchased.value);
        let newAmountPaid = parseInt(amountPaid.value);
        let answer = newProductPrice * newNumberPurchased;

         totalPrice.value = answer + "+";

         if (isNaN(newAmountPaid) === false && newAmountPaid !== "") {
            let balanceReturn = newAmountPaid - answer;
            if(balanceReturn > 0){
                balance.value = balanceReturn;
            };
        };

        let table = document.getElementsByTagName("table")[0];

        let tableRow = document.createElement("tr");

        let columnOne = document.createElement("td");
        let columnTwo = document.createElement("td");
        let columnThree = document.createElement("td");
        let columnFour = document.createElement("td");

        let itemBought = document.createTextNode(product);
        let itemPrice = document.createTextNode(newProductPrice);
        let itemNumber = document.createTextNode(newNumberPurchased);
       let price = document.createTextNode(answer);

       columnOne.appendChild(itemBought);
       columnTwo.appendChild(itemPrice);
       columnThree.appendChild(itemNumber);
       columnFour.appendChild(price);

       tableRow.appendChild(columnOne);
       tableRow.appendChild(columnTwo);
       tableRow.appendChild(columnThree);
       tableRow.appendChild(columnFour);

       table.appendChild(tableRow);

        document.getElementsByTagName('input')[2].value = "";
        document.getElementsByTagName('input')[3].value = "";
        document.getElementsByTagName('input')[4].value = "";
        printNow.disabled = true;
     
    }else if(totalPrice.value !== "" && productPrice.value !== "" && numberPurchased.value !== "" && product !== ""){

     let newTotalPrice = parseInt(totalPrice.value);
       let newProductPrice = parseInt(productPrice.value);
       let newNumberPurchased = parseInt(numberPurchased.value);
       let newAmountPaid = parseInt(amountPaid.value);

       let answer = newTotalPrice + (newProductPrice * newNumberPurchased);
        totalPrice.value = answer + "+"
        let itemPrice = newProductPrice * newNumberPurchased;
        if (isNaN(newAmountPaid) === false && newAmountPaid !== "") {
            let balanceReturn = newAmountPaid - answer;
            if(balanceReturn > 0){
                balance.value = balanceReturn;
            };
        };

       let table = document.getElementsByTagName("table")[0];

       let tableRow = document.createElement("tr");

       let columnOne = document.createElement("td");
       let columnTwo = document.createElement("td");
       let columnThree = document.createElement("td");
       let columnFour = document.createElement("td");

       let itemBought = document.createTextNode(product);
       let newPrice = document.createTextNode(newProductPrice);
       let itemNumber = document.createTextNode(newNumberPurchased);
      let price = document.createTextNode(itemPrice);

      columnOne.appendChild(itemBought);
      columnTwo.appendChild(newPrice);
      columnThree.appendChild(itemNumber);
      columnFour.appendChild(price);

      tableRow.appendChild(columnOne);
      tableRow.appendChild(columnTwo);
      tableRow.appendChild(columnThree);
      tableRow.appendChild(columnFour);

      table.appendChild(tableRow);

       document.getElementsByTagName('input')[2].value = "";
       document.getElementsByTagName('input')[3].value = "";
       document.getElementsByTagName('input')[4].value = "";
       printNow.disabled = true;

    } else {
        alert("ENTER VALID DIGITS");
    };

};
add.addEventListener("click", addition);

//RESET FUNCTION
const set = () => {
    document.getElementsByTagName('input')[0].value = "";
    document.getElementsByTagName('input')[1].value = "";
    document.getElementsByTagName('input')[2].value = "";
    document.getElementsByTagName('input')[3].value = "";
    document.getElementsByTagName('input')[4].value = "";
    document.getElementsByTagName('input')[5].value = "";
    document.location.reload();
};
reset.addEventListener("click", set);

const toPrint = () => {

        document.getElementsByTagName("caption")[0].style.display = "initial";
        let receipt = document.getElementById("receipt").innerHTML;
            let a = window.open(' ',' ', 'height=500, width=400');
            a.document.write('<html>');
            a.document.write('<head> <style>');
            a.document.write(' * {box-sizing: border-box;} table{width: 150px; max-width: auto; margin: auto;}  caption {font-weight: 900; margin-left: 105%; font-size: 15px;}  table,th, td { font-family: monospace, sans-serif; border: 0.2px solid black; border-collapse: collapse; border: 0.2px solid black; padding: 5px; font-size: xx-small;} th,td {text-align: center;}');
            a.document.write('</style> </head>');
            a.document.write('<body> <br>');
            a.document.write(receipt);
            a.document.write('</body> </html>');
            a.document.close();
            a.print();
};
printNow.addEventListener("click", toPrint);