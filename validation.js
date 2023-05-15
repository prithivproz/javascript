var user=document.getElementById("us");
user.style.outline= "none";
function us(){
    var user1=document.getElementById("us").value;
    if(user1.length>=5){
       var user2=document.getElementById("username");
       user2.innerHTML="your user name strong";
       user2.style.color="green";
       user.style.border="2px solid green";
    }
    else{
        var user2=document.getElementById("username");
        user2.innerHTML="username must be above 5 charachter";
        user2.style.color="red";
        user.style.border="2px solid red";
    }
}
var mail=document.getElementById("ma");
mail.style.outline="none";
function ma(){
    var mail1=document.getElementById("ma").value;
    var re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(mail1.match(re)){
        // console.log("access");
        var mail2=document.getElementById("maid");
        mail2.innerHTML="accesss granted"
        mail2.style.color="green"
        mail.style.border="2px solid green";
    }
    else{
        var mail2=document.getElementById("maid");
        mail2.innerHTML="accesss denied"
        mail2.style.color="red"
        mail.style.border="2px solid red";
    }
}