var d, CC, YY, MM, DD, dayValue;
var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday" ];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

function validate () {
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var date = document.getElementById("date");

    if (year.value == "" || year.value < 1900 || year.value > 2020 ) {
        alert("please provide a valid year!");
        return false;
    } else if (month.value == "" ||  month.value >12 || month.value <1 ) {
        alert("please provide a valid month!");
        return false;
    }
        else if (date.value == "" || date.value <1 || date.value >31 ) {
            alert("please provide a valid date!");
            return false;
        }
      else {
        return true;
    }
}

function getGender () {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        
    }
}

function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    alert("d");
    
  }


