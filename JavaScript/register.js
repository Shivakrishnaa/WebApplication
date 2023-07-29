function getdetails()
{
    var email=document.getElementById("usid").value
    var password= document.getElementById("pass").value
    var password2= document.getElementById("pass2").value
    if(password==password2)
    {
        localStorage.setItem("e",email)
        localStorage.setItem("p",password)
        localStorage.setItem("p2",password2)
        var fom=document.forms
        fom[0].action="../index.html"
        fom[0].elements[2].type="submit"
    }
    else{
        document.getElementById("notice").innerHTML="PASSWORD MUST BE SAME"
    }
}
function verify()
{
    var mail1=document.getElementById("usid").value
    var pass1= document.getElementById("pass").value
    var mail2=localStorage.getItem("e")
    var pass2=localStorage.getItem("p")
    if(mail1==mail2&&pass1==pass2)
    {
        var fom=document.forms
        fom[0].action="./Html/carpage.html"
        fom[0].elements[2].type="submit"
    }
    else if(mail1==mail2&&pass1!=pass2)
    {
        document.getElementById("result").innerHTML="Wrong password Entered"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
    }
    else if(mail1!=mail2&&pass1==pass2)
    {
        document.getElementById("result").innerHTML="Wrong UserId Entered"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.getElementById("emailDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    }
    else{
        document.getElementById("result").innerHTML="Wrong UserId and password"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="none"
        document.body.style.backgroundColor="red"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./asset/open.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./asset/close.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
