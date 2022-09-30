const Male_Names=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 const Female_Names=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

 function getAkanName(){  
    const year =document.getElementById("year-input");
    //alert(year.value);
    const month =document.getElementById("month-input");
    const days =document.getElementById("day-input");
    const male=document.getElementById("male-input");
    const female=document.getElementById("female-input");
    const date=`${year.value}-${month.value}-${days.value}`;
    const mydate = new Date(date);
    let day = mydate.getDay();
    let name="";
    
    if(male.checked){
        name=Male_Names[day];
    }else{
        name=Female_Names[day];
    }
    alert(name);
    let nameElement=document.getElementById("result");
    nameElement.innerHTML(name);
    return false;


 }
 