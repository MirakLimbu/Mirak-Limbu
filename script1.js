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
    if (document.getElementById('subject').value==""){
        alert('Please enter your subject.');
        return false;
    }
    if (document.getElementById('message').value == ""){
        alert('Please write your message.');
        return false;
    }
}



