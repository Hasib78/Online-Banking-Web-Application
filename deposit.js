console.clear();
document.getElementById('btn-deposit').addEventListener("click", function () {
    const depositField = document.getElementById('deposit-amount');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);
    //console.log(depositAmount);


    //clear depositfield
    depositField.value = " ";

    if (isNaN(newdepositAmount)) {
        alert("Provide valid number");
        return;
    }


    const depositTotalElement = document.getElementById('total-deposit');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    //console.log(depositTotal);
    depositTotalElement.innerText = currentDepositTotal;

    //balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);

    const currentbalanceTotal = previousbalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentbalanceTotal;


});