let returnOutput = document.getElementById("returnOutput");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    GreaterThanLessThanApi(num1.value, num2.value);
})


const GreaterThanLessThanApi = async (num1, num2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${num1}/${num2}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}