let customer_name=document.getElementById('name');
let customer_age=document.getElementById('age');
let customer_tickets=document.getElementById('tickets');
let calculate=document.getElementById('calculate');
let info3=document.getElementById('info3');
let info=document.getElementById('info');
let info2=document.getElementById('info2');
let info4=document.getElementById('info4');
let clear=document.getElementById('clear');
function calculateTicket(){
    info.innerHTML=customer_name.value+' Ticket';
    info.style.fontSize='50px';
    info.style.margin='10px';
    x=0;
    let age=Number(customer_age.value);
    if (age>=1 && age<12){
        x=5;
        info2.innerHTML="Price per ticket:"+x+"$";
    }
    else if (age>=12 && age<=17){
        x=7;
        info2.innerHTML="Price per ticket:"+x+"$";
    }
    else if (age>=18){
        x=10;
        info2.innerHTML="Price per ticket:"+x+"$";
    }
    else{
        info2.innerHTML='You entered wrong input for age.';
    }
    
    info2.style.fontSize="20px";
    info3.innerHTML="Number of tickets:"+customer_tickets.value;
    info3.style.display='block';
    info3.style.fontSize="20px";
    price=customer_tickets.value*x;
    info4.innerHTML="Total:"+price+"$";
    info4.style.fontSize="20px";
}
function clearTicket(){
   customer_name.value="";
   customer_age.value="";
   customer_tickets.value="";
   info.innerHTML="Enter your information above."
   info.style.fontSize="16px";
   info2.innerHTML="";
   info3.innerHTML="";
   info4.innerHTML="";

}
calculate.addEventListener('click',calculateTicket);
clear.addEventListener('click',clearTicket);