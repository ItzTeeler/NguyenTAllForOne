let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");
let returnOutput = document.getElementById("returnOutput");

submit.addEventListener("click", () =>{
    if(num1.value === "" || num2.value === ""){
        returnOutput.innerText = "Please Enter Something";
    }else{
        AddNumApi(num1.value, num2.value);
    }
    
});


const AddNumApi = async (num1, num2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${num1}/${num2}`);
    const data = await promise.text();
    returnOutput.innerText = data;
}

