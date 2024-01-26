let returnOutput = document.getElementById("returnOutput");
let stringInput = document.getElementById("stringInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    ReverseItNumbersApi(stringInput.value);
})


const ReverseItNumbersApi = async stringInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${stringInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}