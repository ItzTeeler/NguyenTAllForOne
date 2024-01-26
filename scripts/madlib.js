let returnOutput = document.getElementById("returnOutput");
let genderInput = document.getElementById("genderInput");
let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let colorInput = document.getElementById("colorInput");
let pronounInput = document.getElementById("pronounInput");
let foodInput = document.getElementById("foodInput");
let jobInput = document.getElementById("jobInput");
let adjective1Input = document.getElementById("adjective1Input");
let adjective2Input = document.getElementById("adjective2Input");
let nounInput = document.getElementById("nounInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(genderInput.value === "" || nameInput.value === "" || ageInput.value === "" || colorInput.value === "" || pronounInput.value === "" || foodInput.value === "" || jobInput.value === "" || adjective1Input.value === "" || adjective2Input.value === "" || nounInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else if(genderInput.value.toLowerCase() === "something" || nameInput.value.toLowerCase() === "something" || ageInput.value.toLowerCase() === "something" || colorInput.value.toLowerCase() === "something" || pronounInput.value.toLowerCase() === "something" || foodInput.value.toLowerCase() === "something" || jobInput.value.toLowerCase() === "something" || adjective1Input.value.toLowerCase() === "something" || adjective2Input.value.toLowerCase() === "something" || nounInput.value.toLowerCase() === "something"){
        returnOutput.innerText = "Don't actually put something... idiot";
        genderInput.value = "";
        nameInput.value = "";
        ageInput.value = "";
        colorInput.value = "";
        pronounInput.value = "";
        foodInput.value = "";
        jobInput.value = "";
        adjective1Input.value = "";
        adjective2Input.value = "";
        nounInput.value = "";
    }else{
        MabLibApi(genderInput.value, nameInput.value, ageInput.value, colorInput.value, pronounInput.value, foodInput.value, jobInput.value, adjective1Input.value, adjective2Input.value, nounInput.value);
        genderInput.value = "";
        nameInput.value = "";
        ageInput.value = "";
        colorInput.value = "";
        pronounInput.value = "";
        foodInput.value = "";
        jobInput.value = "";
        adjective1Input.value = "";
        adjective2Input.value = "";
        nounInput.value = "";
    }


})


const MabLibApi = async (genderInput, nameInput, ageInput, colorInput, pronounInput, foodInput, jobInput, adjective1Input, adjective2Input, nounInput) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${genderInput}/${nameInput}/${ageInput}/${colorInput}/${pronounInput}/${foodInput}/${jobInput}/${adjective1Input}/${adjective2Input}/${nounInput}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}