// alert, prompt, confirm
let resultPrompt = prompt("How old are you?", 100);
alert(`You are ${resultPrompt} years old`);
let resultConfirm = confirm("This site will have lots of alerts I imagine");

let message = resultConfirm ? "Cool!" : "Bad!";
alert(message);