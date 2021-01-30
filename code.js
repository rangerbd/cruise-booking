const firstIncrement =document.getElementById("first-increment");
firstIncrement.addEventListener("click",function(){
    firstclasshandlar(true);
})

const firstDecrement =document.getElementById("first-decrement");
firstDecrement.addEventListener("click",function(){
    firstclasshandlar(false);
})

function firstclasshandlar(quantity){
    const firstInput=document.getElementById("first-input").value;
    const firstInputNumber=parseFloat(firstInput);

    if(quantity == true){
        increment = firstInputNumber+1;
    }

    if(quantity ==false && increment>0){
        increment = firstInputNumber-1;
    }

    document.getElementById("first-input").value= increment;
    add();
}

// economy class js codes

const ecoIncrement =document.getElementById("eco-increment");
ecoIncrement.addEventListener("click",function(){
    ecohandlar(true);
})

const ecoDecrement =document.getElementById("eco-decrement");
ecoDecrement.addEventListener("click",function(){
    ecohandlar(false);
})

function ecohandlar(eco){
    const ecoInput=document.getElementById("eco-input").value;
    let ecoInputNumber=parseFloat(ecoInput);

    if(eco == true){
        ecoInputNumber = ecoInputNumber+1;
    }

    if(eco ==false && ecoInputNumber>0){
        ecoInputNumber = ecoInputNumber-1;
    }

    document.getElementById("eco-input").value= ecoInputNumber;
    add();
}

// add and vat section

function add(){
    const ecoInput=document.getElementById("eco-input").value;
    let ecoInputNumber=parseFloat(ecoInput);

    const firstInput=document.getElementById("first-input").value;
    const firstInputNumber=parseFloat(firstInput);

    const subInput=  ecoInputNumber * 100 + firstInputNumber * 150;
    document.getElementById("subtotal").innerText=subInput;

    const tax= subInput * .1;
    document.getElementById("vat").innerText= tax;

    const total= subInput + tax;
    document.getElementById("total").innerText=total;

}