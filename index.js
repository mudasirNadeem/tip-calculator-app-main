var buttonsElement = document.querySelectorAll('.percantage-btn');
var billAmount = document.getElementById('billAmount');
var numberOfPeople = document.getElementById('numberOfPeople');
var amountPercantage = document.getElementById('amount-percantage');
var totalAmount = document.getElementById('totalamount');
var customPercantageId = document.getElementById('customPercantageId');

var index = 0;
buttonsElement.forEach(function(button) {
    button.addEventListener("click", function() {
        billPercantage(button); 
    });
    var idIndex = index;
    button.setAttribute('id' , idIndex);
    index++;
});

function billPercantage(index){
    var buttonStrToNumber =  parseFloat(index.innerText);
    var laberCount = parseFloat(numberOfPeople.value);
    if(laberCount > 0 && parseFloat(billAmount.value) >= 100){
        let percentageFormula = (buttonStrToNumber / 100) * billAmount.value;
        var percantage = percentageFormula / laberCount;
        amountPercantage.innerText = "$" + percantage;
        totalAmount.innerText = parseFloat(billAmount.value) + buttonStrToNumber;
    }
    else{
        alert('bill field is required greate than 100 and other field is required greater than 0 thank you')
    }  
}

function resetAmount(){
    amountPercantage.innerText = '$0.00';
    totalAmount.innerText = '$0.00';
}
function customPercantage(){
    var laberCount = parseFloat(numberOfPeople.value);
    if(laberCount > 0 && parseFloat(billAmount.value) >= 100){
        let percentageFormula = (customPercantageId.value / 100) * billAmount.value;
        var percantage = percentageFormula / laberCount;
        amountPercantage.innerText = "$" + percantage.toFixed(2);
        totalAmount.innerText = parseFloat(billAmount.value) + parseFloat(customPercantageId.value);
    }  
    else{
        alert('Both field is Required');
        customPercantageId.value = '';
    }
}