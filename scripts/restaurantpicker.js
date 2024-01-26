let returnOutput = document.getElementById("returnOutput");
let numberInput = document.getElementById("numberInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    RestaurantPickerApi(numberInput.value);
})


const RestaurantPickerApi = async numberInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${numberInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}