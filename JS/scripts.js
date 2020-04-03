function validate () {
    var CC = parseInt(document.getElementById("century").value);
    var YY = parseInt(document.getElementById("year").value);
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value); 
  
    if (CC == "" || CC > 20 || CC <19) {
      alert("You can either enter 20th or 19th century");
      return false;
    } else if (YY == "" || YY >99 || YY <0) {
      alert("Please provide a year between 0 and 99");
      return false;
    } else if ( MM == "" || MM > 31 || MM < 1) {
      alert("Please enter a month between 1 and 12");
      return false;

    } else if ( DD == "" || DD > 31 || DD < 1) {
      alert("Please enter a date between 1 and 31");
      return false;
    } else {
      return true;
    }
  
  
}
function getName() {
  var CC = parseInt(document.getElementById("century").value);
  var YY = parseInt(document.getElementById("year").value);
  var MM = parseInt(document.getElementById("month").value);
  var DD = parseInt(document.getElementById("date").value);

  var dayOfTheWeek = Math.abs(parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);

  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", " Afua", "Ama"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  if (dayOfTheWeek == 0 && female.checked == true) {
    alert("Your Akan Name is " + femaleNames[0]);


  } else if (dayOfTheWeek == 1 && female.checked == true)   {
    alert("Your Akan Name is " + femaleNames[1]);
  } else if (dayOfTheWeek == 2 && female.checked == true) {
    alert("Your Akan Name is " + femaleNames[2]);
  } else if (dayOfTheWeek == 3 && female.checked == true) {
    alert("Your Akan Name is " + femaleNames[3]);
  } else if (dayOfTheWeek == 4 && female.checked == true) {
    alert("Your Akan Name is " + femaleNames[4]);
  } else if (dayOfTheWeek == 5 && femal.checked == true) {
    alert("Your Akan Name is " + femaleNames[5]);
  } else if (dayOfTheWeek == 6 && female.checked == true) {
    alert("Your Akan Name is " + femaleNames[6]);
  }  else if (dayOfTheWeek == 0 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[o]);
  }  else if (dayOfTheWeek == 1 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[1]);
  }  else if (dayOfTheWeek == 2 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[2]);
  }  else if (dayOfTheWeek == 3 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[3]);
  }  else if (dayOfTheWeek == 4 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[4]);
  }  else if (dayOfTheWeek == 5 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[5]);
  }  else if (dayOfTheWeek == 6 && male.checked == true) {
    alert("Your Akan Name is " + maleNames[6]);
  }


}


