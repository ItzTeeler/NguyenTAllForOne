let returnOutput = document.getElementById("returnOutput");
let askInput = document.getElementById("askInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    Magic8BallApi();
})


const Magic8BallApi = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();
    returnOutput.innerText = data;
}