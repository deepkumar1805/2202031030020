function validationEvent() {
    var FullName = document.getElementById("fName").value;
    var UserId = document.getElementById("userId").value;
    var PhNumber = document.getElementById("PhNo").value;
    var Email = document.getElementById("em_1").value;
    var DateOfb = document.getElementById("DOB").value;
    var Addr = document.getElementById("Add").value;
    var pass = document.getElementById("psw").value;
    var cpass = document.getElementById("psw-repeat").value;
    var br = document.getElementById("Br_1").value;



    if (FullName == "") {
        alert("Please Enter FullName..")
        return false;
    }
    else if (FullName.search(/^[a-zA-Z]+$/) == -1) {
        alert("Please Enter valid FullName..")
        return false;
    }
    else if (UserId == "") {
        alert("Please Enter UserId..")
        return false;
    }
    else if (UserId.search(/^[a-zA-Z]+$/) == -1) {
        alert("Please Enter valid UserId..")
        return false;
    }
    else if (PhNumber == "") {
        alert("Please Enter Phonenumber..")
        return false;
    }
    else if (PhNumber.search(/^[0-9]+$/) == -1) {
        alert("Please Enter valid PhoneNumber..")
        return false;
    }
    else if (Email == "") {
        alert("Please Enter Email..")
        return false;
    }
    else if (Email.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) == -1) {
        alert("Please Enter valid Email..")
        return false;
    }
    else if (DateOfb == "") {
        alert("Please Enter Date..")
        return false;
    }
    else if (Addr == "") {
        alert("Please Enter Address..")
        return false;
    }
    else if (pass == "") {
        alert("Please Enter PassWord..")
        return false;
    }
    else if (pass.search("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$")==-1) {
        alert("Please Enter Valid Password..")
        return false;
    }
    else if (cpass == "") {
        alert("Please Enter ConfirmPassWord..")
        return false;
    }
    else if (br == "") {
        alert("Please Enter Branch..")
        return false;
    }
    else{
        return(true)
    }
}