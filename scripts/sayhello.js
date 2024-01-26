let returnOutput = document.getElementById("returnOutput");
let nameInput = document.getElementById("nameInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    ReverseItStringApi(nameInput.value);
})


const ReverseItStringApi = async nameInput => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/controller/SayHell/${nameInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}