function checkforblank(){
    if (document.getElementById('fname').value == ""){
        alert('Please enter your First Name.');
        return false;
    }
    if (document.getElementById('lname').value == ""){
        alert('Please enter your Last Name.');
        return false;
    }
    if (document.getElementById('email').value == ""){
        alert('Please enter your Email.');
        return false;
    }
    if (document.getElementById('number').value==""){
        alert('Enter your Number.');
        return false;
    }
    if (document.getElementById('number').value.length !=10){
        alert('Number Must be 10 digit.');
        return false;
    }
    if (document.getElementById('password').value == ""){
        alert('Enter Your Password.');
        return false;
    }
    if (document.getElementById('password').value <= 8){
        alert('Password cannot be less than 8 character.');
        return false;
    }
}



