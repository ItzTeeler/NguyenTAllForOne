let returnOutput = document.getElementById("returnOutput");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else if(num1.value.toLowerCase() === "something" || num2.value.toLowerCase() === "something"){
        returnOutput.innerText = "Don't actually put something... idiot";
        num1.value = "";
        num2.value = "";
    }else{
        GreaterThanLessThanApi(num1.value, num2.value);
        num1.value = "";
        num2.value = "";
    }
})


const GreaterThanLessThanApi = async (num1, num2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${num1}/${num2}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}