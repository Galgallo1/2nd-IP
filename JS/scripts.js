var d, CC, YY, MM, DD, dayValue;
var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday" ];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

function validate() {
    var gender= document.getElementsByName("gender")
    if(document.myForm.year.value !=4 || document.myForm.year.value > 2020) {
        alert("Please provise a valid year of birth!");
        document.myForm.year.value.focus();
        return false;
    } else if(document.myform.month.value !=2 || document.myForm.month.value >12 || document.myform.month.value <0){
        alert("please provide a valid month of birth!");
        document.myForm.month.value.focus();
        return false;
    } else if (document.myForm.date.value !=2 || document.myForm.date.value >31 || document.myForm.date.value <0) {
        alert("Please provide a valid date!");
        document.myForm.date.value.focuse();
        return false
    } else{
        return true
    }
}