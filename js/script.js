// var CC, MM, DD, d, dayvalue;
// var dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleName=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleName=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var me = new Date();
    me.setDate(parseInt(day));
    me.setMonth(parseInt(Month)-1);
    me.setFullYear(parseInt(year));
    var k = me.getDay();
    
    if(k===0){
        ("Sunday");
    }else if(k===1){
        ("Monday");
    }else if(k===2){
        ("Tuesday");
    }else if(k===3){
        ("Wednesday");
    }else if(k===4){
        ("Thursday");
    }else if(k===5){
        ("Friday");
    }else if(k===6){
        ("Saturday");
    }
    if(year==""||year>3040){
        alert("insert a valid year");

    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid day");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){ 
        alert("Your Akan name is" + maleName[k]);
    

    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is" + femaleName[k]);

    }

    

}





    
