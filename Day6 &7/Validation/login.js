function LogValidEvent(){
    var User =document.getElementById('userId').value;
    var pwd = document.getElementById('psw').value;

    if (User == "") {
        alert("Please Enter UserName..")
        return false;
    }
    else if (pwd == "") {
        alert("Please Enter Password..")
        return false;
    }
    else
    {
        return (true); 
    }
}