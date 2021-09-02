//event handler 
document.getElementById('submitBtn').addEventListener('click',function(){
   //getting email from input
    const userEmail=document.getElementById('userEmail').value;
    // console.log(getEmail);
    //getting password from input
    const userPassword=document.getElementById('userPassword').value;
    // console.log(userPassword);
    if(userEmail=='abc@gmail.com' && userPassword==123456){
        window.location.href='banking.html';
    }
    else{
        document.getElementById('hints').innerText='Plese input "abc@gmail.com" as email and "123456" as password';

    }
});
