function sendMail(){
    let parms={
        first_name : document.getElementById("first_name").value,
        last_name : document.getElementById("last_name").value,
        mailid : document.getElementById("mailid").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        
    }

    emailjs.send("service_5h1if59","template_jvaok7n",parms).then(alert("Email Sent!!"));

}