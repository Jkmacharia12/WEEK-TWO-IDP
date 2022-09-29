function getAkanName () {
    var yearOfBirth = document.getElementById("year-input").value;
    var monthOfBirth = Number(document.getElementById("month-input").value);
    var dayOfBirth = Number(document.getElementById("day-input").value);
    var genders = document.getElementsByName("gender");
    // Gender fuction
    function getGender () {
      for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    let myGenderValue = getGender();
    console.log(myGenderValue);
  //Date validator
 function dateValidator () { if (yearOfBirth%4===0 && monthOfBirth===2 && 1>dayOfBirth>28) {return false; } else
   {return true;
    
  }if (1>dayOfBirth>31) { return false;
    
  } else { return true
    
  }}
//Month Validator
function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

const Female_Names=["Akosua","Adwoa","Abena","Akua","Yaa","Efua","Amba"]
const Male_Names=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const Day_Of_Week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

//user will be inputing date of birth and gender.
//Based on the two parameters the application will determine DOW the user was born.
//Return will be the user Akan name.

var dow= function dayofweek(){Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7)}


