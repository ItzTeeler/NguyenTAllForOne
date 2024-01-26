let returnOutput = document.getElementById("returnOutput");
let numberInput = document.getElementById("numberInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    OddOrEvenApi(numberInput.value);
})


const OddOrEvenApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${numberInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}