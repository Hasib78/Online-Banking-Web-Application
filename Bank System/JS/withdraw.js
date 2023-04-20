console.clear();

document.getElementById('btn-withdraw').addEventListener("click", function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

    withdrawField.value = " ";

    if (isNaN(newWithdrawAmount)) {
        alert("Provide valid number");
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);
    //console.log(previouswithdrawTotal);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
    //console.log(previousbalanceTotal);



    if (newWithdrawAmount > previousbalanceTotal) {
        alert("Don't have enough money into your Account");
        return;
    }

    //Withdraw Amount total
    const currentwithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentwithdrawTotal;


    //Balance Amount total
    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

});