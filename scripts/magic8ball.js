let returnOutput = document.getElementById("returnOutput");
let askInput = document.getElementById("askInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(askInput.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else{
        Magic8BallApi();
        askInput.value = "";
    }
    
})


const Magic8BallApi = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();
    returnOutput.innerText = data;
}