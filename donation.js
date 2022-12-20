const cardnum = document.getElementById("cardnum")
const cardname = document.getElementById("cardname")
const cvv = document.getElementById("cvv")
const expm = document.getElementById("expm")
const expy = document.getElementById("expy")
const cardsumit = document.getElementById("cardsubmit")
const inputBoxnum = document.getElementById("inputBoxnum")
const inputBoxname = document.getElementById("inputBoxname")
const inputBoxexpm = document.getElementById("inputBoxexpm")
const inputBoxexpy = document.getElementById("inputBoxexpy")
const inputBoxcvv = document.getElementById("inputBoxcvv")

/*-------------------------------------check validation in payment-----------------------------------------*/
function checkcardnum (){
    if((cardnum.innerText)== '' || (cardnum.innerText == null)){
      inputBoxnum.className = "inputBox error"
      inputBoxnum.childNodes[5].textContent = "Card number cannot be empty"
    }
    
  }
  function checkcardname (){
    if((cardname.innerText)== '' || (cardname.innerText == null)){
        inputBoxname.className = "inputBox error"
        inputBoxname.childNodes[5].textContent = "Name cannot be empty"
    
    }
  }
  function checkexpm(){
    if(expm.value== null || expm.value == "month"){
        inputBoxexpm.className = "inputBox error"
        inputBoxexpm.childNodes[5].textContent = "Date cannot be empty"
    }
  }
  function checkexpy(){
    if(expy.value == null || expy.value == "year"){
        inputBoxexpy.className = "inputBox error"
        inputBoxexpy.childNodes[5].textContent = "Date cannot be empty"
    }
  }
  function checkcvv (){
if(cvv.innerText == null || cvv.innerText == ''){
    inputBoxcvv.className = "inputBox error"
        inputBoxcvv.childNodes[5].textContent = "Cvv cannot be empty"
}
  }
  function validatepaymentdetails (){
    checkcardnum();
    checkcardname();
    checkexpm();
    checkexpy();
    checkcvv ();
  }
  function paymentsubmit(){
    
    validatepaymentdetails();
    if(inputBoxnum.className !== "inputBox error" ||inputBoxname.className !== "inputBox error"||
    inputBoxexpm.className !== "inputBox error"||inputBoxexpy.className !== "inputBox error"||inputBoxcvv.className !== "inputBox error" ){
        cardnum.innerText = ''
        cardname.innerText = ''
        expm.value == "month"
        expy.value == "year"
        cvv.value == ''

       
        alert("Thank ypu for the donation. Have a great Day!")
    }
    
  }
  cardsumit.addEventListener("click", paymentsubmit)
  
