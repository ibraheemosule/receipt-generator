




let reset= document.getElementsByTagName('button')[0];
let add= document.getElementsByTagName('button')[1];
let submit= document.getElementsByTagName('button')[2];


//ANSWER OR SUBMIT FUNCTION
const totalPriceFunc = () => {
 let newPrice = document.getElementsByTagName('input')[0].value;
let itemPrice= document.getElementsByTagName('input')[3].value;
let numberPurchased= document.getElementsByTagName('input')[4].value;
let amountPaid= document.getElementsByTagName('input')[5].value;
let balanceReturn= document.getElementsByTagName('input')[1];

if(newPrice.includes("+", 1)){
    let totalPrice = document.getElementsByTagName('input')[0];
let answer = eval(newPrice+(itemPrice * numberPurchased));
 totalPrice.value = answer;
 if (isNaN(amountPaid) == false && amountPaid !== "") {
    let balance = eval(amountPaid - answer);
    if(balance > 0){
        balanceReturn.value = balance;
    };
    };
} else {
    if(itemPrice === ""){
document.getElementsByTagName('input')[3].placeholder = "Input Price of item";
} else if(numberPurchased === ""){
    document.getElementsByTagName('input')[4].placeholder = "Input a Number of item";
}  else if(isNaN(itemPrice)== true || isNaN(numberPurchased)== true){
    document.getElementsByTagName('input')[0].placeholder = "Invalid result"
} else if(isNaN(itemPrice)== false && isNaN(numberPurchased)== false){
let totalPrice = document.getElementsByTagName('input')[0];
let answer = eval(itemPrice * numberPurchased);
 totalPrice.value = answer;

 if (isNaN(amountPaid) == false && amountPaid !== "") {
    let balance = eval(amountPaid - answer);
    if(balance > 0){
        balanceReturn.value = balance;
    };
 };
};
};
};
submit.addEventListener('click', totalPriceFunc);

//ADDITION FUNCTION
const addition = () => {
    let totalPrice = document.getElementsByTagName('input')[0].value;
    let balance = document.getElementsByTagName('input')[1].value;
    let product = document.getElementsByTagName('input')[2].value;
    let productPrice= document.getElementsByTagName('input')[3].value;
    let numberPurchased= document.getElementsByTagName('input')[4].value;
    let amountPaid= document.getElementsByTagName('input')[5].value;

    if(totalPrice === ""){
        return totalPriceFunc();
    }else if(totalPrice !== ""){

        let table = document.getElementsByTagName("table")[0];

        let tableRow = document.createElement("tr");

        let columnOne = document.createElement("td");
        let columnTwo = document.createElement("td");
        let columnThree = document.createElement("td");

        let itemBought = document.createTextNode(product);
        let itemNumber = document.createTextNode(numberPurchased);
       let price = document.createTextNode(productPrice);

       columnOne.appendChild(itemBought);
       columnTwo.appendChild(itemNumber);
       columnThree.appendChild(price);

       tableRow.appendChild(columnOne);
       tableRow.appendChild(columnTwo);
       tableRow.appendChild(columnThree);

       table.appendChild(tableRow);

        document.getElementsByTagName('input')[0].value = totalPrice + "+";
       // document.getElementsByTagName('input')[1].value = "";
        document.getElementsByTagName('input')[2].value = "";
        document.getElementsByTagName('input')[3].value = "";
        document.getElementsByTagName('input')[4].value = "";
     //   document.getElementsByTagName('input')[5].value = "";




    }

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
};
reset.addEventListener("click", set);