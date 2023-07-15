function validationEvent(){
    var Fname = document.getElementById("name").value;
    var Em_1 = document.getElementById("email").value;
    var Ph = document.getElementById("phone").value;
    var Msg = document.getElementById("message").value;


    if(Fname == ""){
        alert("Please Enter BookName...")
        return false;
    }
    else if (Fname.search(/^([a-zA-Z ]{2,40})$/) == -1) {
        alert("Please Enter valid BookName..")
        return false;
    }
    else if (Em_1 == "") {
        alert("Please Enter Email..")
        return false;
    }
    else if (Em_1.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) == -1) {
        alert("Please Enter valid Email..")
        return false;
    }
    else if (Ph == "") {
        alert("Please Enter Phonenumber..")
        return false;
    }
    else if (Ph.search(/^[6-9][0-9]{9}$/) == -1) {
        alert("Please Enter valid PhoneNumber..")
        return false;
    }
    else if (Msg == "") {
        alert("Please Enter Your Message..")
        return false;
    }
    else{
        alert("Your Feedback Submited....")
        return (true)
    }
}
