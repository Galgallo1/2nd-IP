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
function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log (d);
    return (math.floor(d))
    
  }

function getGender () {
    var genders = document.getElementsByName("gender");
    var dayValue= calculateDayValue();
    if (genders[0].checked == true) {
        var gender = "male";

    }  else if (genders[0].checked == true ){
        var gender = "female";
    }
    switch (gender) {
        case "male":
            if (dayValue == 0){
                alert("You are born on a " +dayNames[0] +"and your Akan name is " +maleNames[0] );
            } else if (dayValue == 1){
                alert("You are born on a " +dayNames[1] +"and your Akan name is " +maleNames[1] );
            } else if (dayValue == 2){
                alert("You are born on a " +dayNames[2] +"and your Akan name is " +maleNames[2] );
            } else if (dayValue == 3){
                alert("You are born on a " +dayNames[3] +"and your Akan name is " +maleNames[3] );
            } else if (dayValue == 0){
                alert("You are born on a " +dayNames[4] +"and your Akan name is " +maleNames[4] );
            } else if (dayValue == 0){
                alert("You are born on a " +dayNames[5] +"and your Akan name is " +maleNames[5] );
             }else if (dayValue == 0){
                alert("You are born on a " +dayNames[6] +"and your Akan name is " +maleNames[6] );
            }
        break;    
        case "female":
            if (dayValue == 0) {
                alert("You are born on a " +dayNames[0] +"and your Akan name is " +femaleNames[0] );
            } else if (dayValue == 1) {
                alert("You are born on a " +dayNames[1] +"and your Akan name is " +femaleNames[1] );
            } else if (dayValue == 2) {
                alert("You are born on a " +dayNames[2] +"and your Akan name is " +femaleNames[2] );
            } else if (dayValue == 3) {
                alert("You are born on a " +dayNames[3] +"and your Akan name is " +femaleNames[3] );
            } else if (dayValue == 4) {
                alert("You are born on a " +dayNames[4] +"and your Akan name is " +femaleNames[4] );
            } else if (dayValue == 5) {
                alert("You are born on a " +dayNames[5] +"and your Akan name is " +femaleNames[5] );
            } else if (dayValue == 6) {
                alert("You are born on a " +dayNames[6] +"and your Akan name is " +femaleNames[6] );
            } 
        break;
        default:    
    }

}