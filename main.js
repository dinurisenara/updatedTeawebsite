//////////////Image slider ///////////////////
var responsiveSlider = function () {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if (count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if (count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide()
  }, 8000);

};

window.onload = function () {
  responsiveSlider();
}
/*-----------------------------------form validation------------------------------------------------------*/
const form = document.getElementById("form");
const date = document.getElementById("datep");
const fullName = document.getElementById("fullName");
const mobnum = document.getElementById("mobnum");
const email = document.getElementById("email");
const emailconf = document.getElementById("email-conf");
const duration = document.getElementById("duration")
const btnAdd = document.getElementById("Add_order")
const place_order = document.getElementById("place_order")
const add_to_fav = document.getElementById("add_to_fav");
const order_favourite = document.getElementById("order_favourite")
const loyality = document.getElementById("loyality")
const order__sum = document.getElementById("order__sum")
const current_order__sum = document.getElementById("current_order__sum")
const form_itm_name = document.getElementById("name")
const form__item__mnumber = document.getElementById("mnumber");
const form__item__email = document.getElementById("Email");
const form__item__cemail = document.getElementById("CEmail");
const adult_inc = document.getElementById("adult-inc");
const adult_dec = document.getElementById("adult-dec");
const child_inc = document.getElementById("child-inc");
const child_dec = document.getElementById("child-dec");
const inf_dec = document.getElementById("infant-dec");
const inf_inc = document.getElementById("infant-inc");
const LAdult_dec = document.getElementById("SL-adult-dec");
const LAdult_inc = document.getElementById("SL-adult-inc");
const Lchild_dec = document.getElementById("SL-child-dec");
const Lchild_inc = document.getElementById("SL-child-inc");
const LAdult_count = document.getElementById("LAdult_count");
const LChild_count = document.getElementById("LChild_count");
const FAdult_count = document.getElementById("FAdult_count");
const FChild_count = document.getElementById("FChild_count");
const Inf_count = document.getElementById("Inf_count");


let ladultprice
let lchildprice
let fchildprice
let fadultprice

/*----------------------Setting the output feild-----------------------*/
document.addEventListener("DOMContentLoaded", load);
function load() {
  order__sum.innerText = '';
}

/*-------------Date picker disabling the past dates ---------------*/
let today_date = new Date();
let tday = today_date.getDate();
let month = today_date.getMonth + 1;
let year = today_date.getFullYear();
let min_date = `${year}-${month}-${tday}`;

if (month < 10) {
  month = "0" + month;
}
if (tday < 10) {
  tday = "0" + tday
}

date.setAttribute('min', min_date);


/*-----------------------------form validation-------------------*/
function checkinput() {

  checkName();
  chheckemail();
  confirmemail()
  checkmobnum()

}

function checkName() {
  if (fullName.value == null || fullName.value === '') {
    form_itm_name.className = "form__item error "
    form_itm_name.childNodes[7].textContent = "name cannot be empty "
    return false
  };
  return true

}

function chheckemail() {
  if (email.value === '') {
    form__item__email.className = "form__item error "
    form__item__email.childNodes[7].textContent = "E-mail cannot be empty"
    return false
  }
  else { ValidateEmail() }


}
function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return (true)
  }
  form__item__email.className = "form__item error "
  form__item__email.childNodes[7].textContent = "E-mail not valid"
  return false
}
function confirmemail() {
  if (email.value !== emailconf.value) {
    form__item__cemail.className = "form__item error "
    form__item__cemail.childNodes[7].textContent = "E-mails doesn't match"
    return false
  }
  return true
}
function checkmobnum() {
  if (mobnum.value === '' || mobnum.value == null) {
    form__item__mnumber.className = "form__item error "
    form__item__mnumber.childNodes[7].textContent = "Mobile number cannot be empty"
    return false

  }
  else

    var phoneno = /^\d{10}$/;
  if (mobnum.value.match(phoneno)) {
    return true;
  }
  else {
    form__item__mnumber.className = "form__item error "
    form__item__mnumber.childNodes[7].textContent = "Invalid phone number"
    return false
  }
}
/*-------------------------------counter-------------------*/
adult_inc.addEventListener("click", inc1);
adult_dec.addEventListener("click", dec1);

child_inc.addEventListener("click", inc2);
child_dec.addEventListener("click", dec2);

inf_inc.addEventListener("click", inc3);
inf_dec.addEventListener("click", dec3);

LAdult_inc.addEventListener("click", inc4);
LAdult_dec.addEventListener("click", dec4);

Lchild_inc.addEventListener("click", inc5);
Lchild_dec.addEventListener("click", dec5);





function increment(person) {
  let value = parseInt(person.innerText)
  value += 1
  person.innerText = value

}



function decrement(person) {

  let value = parseInt(person.innerText)
  if (value > 0) {
    value -= 1
    person.innerText = value

  }
}


function inc1() {
  increment(FAdult_count)

}
function dec1() {
  decrement(FAdult_count);
}



function inc2() {
  increment(FChild_count)
}
function dec2() {
  decrement(FChild_count);
}



function inc3() {
  increment(Inf_count)
}
function dec3() {
  decrement(Inf_count)
}



function inc4() {
  increment(LAdult_count)
}
function dec4() {
  decrement(LAdult_count);
}



function inc5() {
  increment(LChild_count)
}
function dec5() {
  decrement(LChild_count)
}




/*-------------------------------Add to order Button--------------------------------------------*/

btnAdd.addEventListener('click', add_order);

function add_order() {
  event.preventDefault(event)
  current_order__sum.innerText = ''
  checkinput()

  if (form_itm_name.className == "form__item error " ||
    form__item__email.className == "form__item error " ||
    form__item__cemail.className == "form__item error " ||
    form__item__mnumber.className == "form__item error ") {
    order__sum.innerText = ""
    alert("Please fill out all the feilds ")

  }
  else {

    order__sum.innerText = `Reservation Name:  ${fullName.value} \n
    Reserved Date ${date.value} \n\n Reserved Tickets:  \n 
     Adult(Foreign) = ${FAdult_count.innerText} \nChild(Foreign)= ${FChild_count.innerText}\nInfant= ${Inf_count.innerText} \n Adult(Local) = ${LAdult_count.innerText} \nChild(Local) = ${LChild_count.innerText}
     \n Visit Duration:\t ${duration.value} \n Overoll order: ${pricecalc()}LKR `
  }


}
/*----------------------------Ticket Price calculation----------------*/
function pricecalc() {
  if (duration.value == "1/2fday") {
    ladultprice = parseInt(LAdult_count.innerText) * (1200 + 350)
    lchildprice = parseInt(LChild_count.innerText) * (700 + 350)
    fchildprice = parseInt(FChild_count.innerText) * (2700 + 450)
    fadultprice = parseInt(FAdult_count.innerText) * (5500 + 450)
  } else
    if (duration.value == "fullday") {
      ladultprice = parseInt(LAdult_count.innerText) * (1200 + 600)
      lchildprice = parseInt(LChild_count.innerText) * (700 + 600)
      fchildprice = parseInt(FChild_count.innerText) * (2700 + 800)
      fadultprice = parseInt(FAdult_count.innerText) * (5500 + 800)
    }
    else if (duration.value == "3h") {
      ladultprice = parseInt(LAdult_count.innerText) * 1200
      lchildprice = parseInt(LChild_count.innerText) * 700
      fchildprice = parseInt(FChild_count.innerText) * 2700
      fadultprice = parseInt(FAdult_count.innerText) * 5500
    }
  let total = ladultprice + lchildprice + fchildprice + fadultprice
  return total

}
/*------------------------- current order---------------------------------*/
adult_inc.addEventListener("click", current_order)
adult_dec.addEventListener("click", current_order)
child_inc.addEventListener("click", current_order)
child_dec.addEventListener("click", current_order)
inf_inc.addEventListener("click", current_order)
inf_dec.addEventListener("click", current_order)
LAdult_inc.addEventListener("click", current_order)
LAdult_dec.addEventListener("click", current_order)
Lchild_inc.addEventListener("click", current_order)
Lchild_dec.addEventListener("click", current_order)
duration.addEventListener("change", current_order)

add_to_fav.addEventListener("click", current_order)

function current_order() {
  current_order__sum.innerText = `Current order: ${pricecalc()}LKR `
}
/*--------------------------------Place Order-----------------------------------*/
place_order.addEventListener("click", placingorder)
function placingorder() {
  
  checkinput()
  if (form_itm_name.className == "form__item error " ||
    form__item__email.className == "form__item error " ||
    form__item__cemail.className == "form__item error " ||
    form__item__mnumber.className == "form__item error ") {
    alert("Your order is incomplete!")

  }
  else{
  setloyality();
    alert("Thank you for the Reservation \n Have a Great Day!")}
}

/*-------------------------------Add to favourites----------------------------*/

add_to_fav.addEventListener("click", addtofav)
function addtofav() {
  let fav = {
    fadult: FAdult_count.innerText, fchild: FChild_count.innerText, inf: Inf_count.innerText, ladult: LAdult_count.innerText, lchild: LChild_count.innerText, duration: duration.value

  }
  localStorage.setItem("Favourite", JSON.stringify(fav));
}
order_favourite.addEventListener("click", orderfav)
function orderfav() {
  let favo = JSON.parse(localStorage.getItem("Favourite"))
  FAdult_count.innerText = favo.fadult
  FChild_count.innerText = favo.fchild
  Inf_count.innerText = favo.inf
  LAdult_count.innerText = favo.ladult
  LChild_count.innerText = favo.lchild
  duration.value = favo.duration
  current_order()
}
/*-----------------------------------------------------------setting the loyality------------------------*/
function setloyality() {
  let sum = (parseInt(FAdult_count.innerText) + parseInt(FChild_count.innerText) + parseInt(Inf_count.innerText) + parseInt(LAdult_count.innerText) + parseInt(LChild_count.innerText) + parseInt(LChild_count.innerText))
  if (sum>=3){
    let loyalitypoints = 15* sum;
    let lp = JSON.parse(localStorage.getItem("loyality"));
    localStorage.setItem("loyality",(JSON.stringify(lp + loyalitypoints)))
  
  }
}
/*-----------------------------------check loyality---------------------------------------------*/
loyality.addEventListener('click',checkloyality)
function checkloyality (){
  let loyal
  if((JSON.parse(localStorage.getItem("loyality"))) == null){
     loyal = 0 ;
  }
  else loyal = JSON.parse(localStorage.getItem("loyality"))
  alert(`You have Earned ${loyal} loyality points` )
}

