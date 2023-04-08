console.log("hello from contact js");

const sentForm=document.getElementById("sentForm");

const resetForm=document.getElementById("resetForm");

//----

const name=document.getElementById("name");
console.log("name is : " , name);

const mail =document.getElementById("mail");
console.log("mail is : " , mail);


const comment=document.getElementById("comment");
console.log("comment is " , comment);


const submit=document.getElementById("submit");
console.log("submit is " , submit);

const reset=document.getElementById("reset");
console.log("reset" ,reset);


submit.addEventListener("click" , function(event){
    event.preventDefault();

    console.log("you clicked the submit btn");


    //----
console.log("name value is " , name.value);

console.log("mail value is " , mail.value);

console.log("comment value is " , comment.value);
    //----

    sentForm.innerText="sent form";

});

//----

reset.addEventListener("click" , function(event){
    event.preventDefault();

    console.log("you clicked the reset btn");

    resetForm.innerText="reset form";
});