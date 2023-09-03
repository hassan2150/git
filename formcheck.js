const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

username.addEventListener('blur',() =>{
let regex= /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
let str=username.value;
if(regex.test(str)){
console.log("Username Meatched");
username.classList.remove('is-invalid');}
else{
    console.log("Username didnot Meatched");
    username.classList.add('s-invalid')
    ;
}
})
// email
email.addEventListener('blur',()=>{
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //              hassan123     @   gmail            .com    
   let str=email.value;
   if(regex.test(str)){
console.log('Email Matched');
email.classList.remove('is-invalid');   
}
   else{
    console.log('Email Didn,t Matched');
    email.classList.add('is-invalid');   

   }
})


// phone
phone.addEventListener('blur',() =>{
  let regex=/^[0]([0-9]){10}$/;
  let str=phone.value;
  if(regex.test(str)){
    console.log('Phone Correct');
    phone.classList.remove('is-invalid');
  }  
  else{
    console.log('Phone is N0ot Correct');
    phone.classList.add('is-invalid');
  }
})