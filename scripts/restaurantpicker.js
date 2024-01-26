let returnOutput = document.getElementById("returnOutput");
let numberInput = document.getElementById("numberInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(numberInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else if(numberInput.value.toLowerCase() === "something"){
        returnOutput.innerText = "Don't actually put something... idiot";
        numberInput.value = "";
    }else{
        RestaurantPickerApi(numberInput.value);
        numberInput.value = "";
    }
})


const RestaurantPickerApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${numberInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}