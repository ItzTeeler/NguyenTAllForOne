let returnOutput = document.getElementById("returnOutput");
let stringInput = document.getElementById("stringInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(stringInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else if(stringInput.value.toLowerCase() === "something"){
        returnOutput.innerText = "Don't actually put something... idiot";
        stringInput.value = "";
    }else{
        ReverseItNumbersApi(stringInput.value); 
        stringInput.value = "";
    }

})


const ReverseItNumbersApi = async stringInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${stringInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}