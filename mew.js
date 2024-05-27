let h1=document.getElementById('h1');
let h2=document.getElementById('h2');
let submit=document.getElementById('submit');
let paytm=document.getElementById('paytm');
let phonepay=document.getElementById('phonepay');
let subscribe=document.getElementById('subscribe');

submit.onclick=function(){
    if(subscribe.checked){
        h1.textContent="Subscribed";
    }
    else{
        h1.textContent="not subscribed";
    }
    if(paytm.checked)
        h2.textContent="radio";
    else{
        h2.textContent="not this paytm";
    }
}