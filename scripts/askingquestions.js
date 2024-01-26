let returnOutput = document.getElementById("returnOutput");
let nameInput = document.getElementById("nameInput");
let timeInput = document.getElementById("timeInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    AskingQuestionsApi(nameInput.value, timeInput.value);
})


const AskingQuestionsApi = async (nameInput, timeInput) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${nameInput}/${timeInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}