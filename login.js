function loginauth()
	{
	  var str;
	  var check=0;
	  
	  var letters = /^[a-zA-Z]+$/;
	  var numbers = /^[0-9]+$/;
	  var phno = /^\d{10}$/;
	  var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	  var pswregex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	  
	  str = document.getElementById("name");
	  if(!str.value.match(letters))
	  {
		check++;
	    alert("The name entered is invalid. Has to be only letters.");
		document.getElementById("name").focus();
		}
      str = document.getElementById("age");
	  if(!str.value.match(numbers))
	  {
		check++;
	    alert("The age entered is invalid. Has to be a number.");
		document.getElementById("age").focus();
		}
	  str = document.getElementById("email");
	  if(!str.value.match(mail))
	  {
		check++;
	    alert("The email entered is invalid.");
		document.getElementById("email").focus();
		}
	  str = document.getElementById("phone");
	  if(!str.value.match(phno))
	  {
		check++;
	    alert("The phone entered is invalid. Has to be 10 digits");
		document.getElementById("phone").focus();
		}
	  str = document.getElementById("psw");
	  if(!str.value.match(pswregex))
	  {
		check++;
	    alert("The password entered is invalid. It must contain atleast one number, one letter and one special character and it has to be between 6 to 16 characters in length.");
		document.getElementById("psw").focus();
		} 
	  if(check!=0)
		return false;
	  else
		return true;
	}
	