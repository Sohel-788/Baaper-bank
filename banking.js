//handle deposit button event listener
document.getElementById('depositBtn').addEventListener('click',function(){
    //getting deposit input value
    const inputDeposit=document.getElementById('inputDeposit');
    const newDepositAmount=inputDeposit.value;
    //updating deposit
    const depositTotal=document.getElementById('depositTotal');
    const previousDeposit=depositTotal.innerText;
    const updatedDepositTotal=parseFloat(previousDeposit)+parseFloat(newDepositAmount);
    depositTotal.innerText=(updatedDepositTotal.toFixed(2));
    //updating deposit balance
    const balanceTotal=document.getElementById('totalBalance');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalance=parseFloat(balanceTotalText);
    const newTotalBalance=parseFloat(previousBalance)+parseFloat(newDepositAmount);
    balanceTotal.innerText=(newTotalBalance.toFixed(2));
    //clearing input field
    inputDeposit.value='';
});
//withdraw button event listener
document.getElementById('withdrawBtn').addEventListener('click',function(){
    //withdraw input
    const inputWithdraw=document.getElementById('inputWithdraw');
    const newWithdrawAmountTotal=inputWithdraw.value;
    //withdraw update
    const withdrawAmount=document.getElementById('withdrawTotal');
    const previousWithdrawAmount=withdrawAmount.innerText;
    const updatedWithdrawAmount=parseFloat(previousWithdrawAmount)+parseFloat(newWithdrawAmountTotal);
    withdrawAmount.innerText=(updatedWithdrawAmount.toFixed(2));
    //updating withdraw balance
    const balanceTotal=document.getElementById('totalBalance');
    const previousBalance=balanceTotal.innerText;
    const updateBalance=parseFloat(previousBalance)-parseFloat(newWithdrawAmountTotal);
    balanceTotal.innerText=(updateBalance.toFixed(2));
    //clear withdraw input field
    inputWithdraw.value='';
})