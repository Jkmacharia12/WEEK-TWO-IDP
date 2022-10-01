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
    }if(female.checked){
        name=Female_Names[day];
        //date validation
    }if (days.value>31||month.value>12){
        name="You entered an Invalid Date";
}if (month.value==2&&days.value>28){name="You entered an Invalid Date";
}if (year.value%4==0&&month.value==2&&days.value>29){name="You entered an Invalid Date";
}
    else{
        //name=Female_Names[day];
    }
    year.value%4==0; if (month.value==2&&days.value>29){System.out.println("You entered an Invalid Date")}
    alert(name);
    let nameElement=document.getElementById("result");
    nameElement.innerHTML(name);
    return false;


 }
 