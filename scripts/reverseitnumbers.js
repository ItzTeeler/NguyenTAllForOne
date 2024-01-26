let returnOutput = document.getElementById("returnOutput");
let numberInput = document.getElementById("numberInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(numberInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else{
        ReverseItNumbersApi(numberInput.value); 
    }
    
})


const ReverseItNumbersApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${numberInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}