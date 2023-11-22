
// Q -- 1 
function showvalue() {
    

    let nameinput = document.getElementById("name").value;
    let emailinput = document.getElementById("email").value;
    let numberinput = document.getElementById("number").value;
    
    let printname = document.getElementById("displayname");
    let printemail = document.getElementById("displayemail");
    let printnumber = document.getElementById("displaynumber");
    
    printname.innerHTML = " Name : " + nameinput ;
    printemail.innerHTML = " Email : " + emailinput ;
    printnumber.innerHTML = " Number : " + numberinput ;
    
    
    }
    
    // Q -- 2
    
    let hidebutton = document.getElementById("hidebutton")
    hidebutton.style.display="none";
    
    function showmore() {
        let hide = document.getElementById("hide");
        hide.style.display="block";
        let showbutton = document.getElementById("showbutton")
        showbutton.style.display="none";
        let hidebutton = document.getElementById("hidebutton")
        hidebutton.style.display="block";
    }
    function showless() {
        let hide = document.getElementById("hide");
        hide.style.display="none"
        let hidebutton = document.getElementById("hidebutton")
        hidebutton.style.display="none";
        showbutton.style.display="block"
    }
    
    // Q --3 
    
    
    function deleterecord(didname) {
        let row1 = document.getElementById(didname);
        row1.classList.add("row1-hide");
        console.log("hello")
    
    }
    
    function editrecord(tidname) {
        
        let td = document.getElementById(tidname);
        let inputdata = td.getElementsByTagName("td");
    
        let name = prompt("Write your name");
        let clas = prompt(" Class ") ; 
        let section = prompt ("Section ")
        let year = prompt("Year : ")
    
            inputdata[0].innerHTML = name ; 
            inputdata[1].innerHTML = clas; 
            inputdata[2].innerHTML = section ; 
            inputdata[3].innerHTML = year ; 
    
            alert("Form has successfully updated")
    }
     