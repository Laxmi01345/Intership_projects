
let fullname=document.getElementById("fn")

let email=document.getElementById("inf");
let phone=document.getElementById("mobn");

let clg=document.getElementById("clgg");
let qual=document.getElementById("qual");

let year=document.getElementById("edd");




function validate() {
 
  // checking whether user name is empty or not 
  if (fullname.value.trim()===""){
    onerror(fullname,"fullname cannot be empty");
    
  }
  else{

    onsuccess(fullname);
  }




  if (email.value.trim()===""){
    onerror(email,"email cannot be empty");
    
  }
  else{

    onsuccess(email);
  }

  
  if (phone.value.trim()===""){
    onerror(phone,"phone no cannot be empty");
    
  }
  else{

    onsuccess(phone);
  }

  
  if (clg.value.trim()===""){
    onerror(clg,"college name cannot be empty");
    
  }
  else{

    onsuccess(clg);
  }


  
  if (qual.value.trim()===""){
    onerror(qual,"Academic Qualification cannot be empty");
    
  }
  else{

    onsuccess(qual);
  }

  
  if (year.value.trim()===""){
    onerror(year,"year cannot be empty");
    
  }
  else{

    onsuccess(year);
  }





}
  

document.querySelector("button")
.addEventListener("click",(event)=>{
  event.preventDefault()
  validate();
});


function onsuccess(input,message){
  let parent=input.parentElement;
  let messageEle=parent.querySelector("small");
  messageEle.style.visibility="hidden";
  parent.classList.remove("error");
  parent.classList.add("success");

}

function onerror(input,message){
  let parent=input.parentElement;
  let messageEle=parent.querySelector("small");
  messageEle.style.visibility="visible";
  messageEle.innerText=message;

  parent.classList.add("error");
  parent.classList.remove("success");
}