let returnOutput = document.getElementById("returnOutput");
let nameInput = document.getElementById("nameInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(nameInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else if(nameInput.value.toLowerCase() === "something"){
        returnOutput.innerText = "Don't actually put something... idiot";
        nameInput.value = "";
    }else{
      ReverseItStringApi(nameInput.value);  
      nameInput.value = "";
    }
    
})


const ReverseItStringApi = async nameInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/controller/SayHell/${nameInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}