function checkChar() {
    let char = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (char === "") {
        result.textContent = "Please enter a letter!";
        return;
    }

    if (!isNaN(char)) {
        result.textContent = "Please enter an alphabet!";
        return;
    }

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        result.textContent = char + " is a Vowel";
    } else {
        result.textContent = char + " is a Consonant";
    }
}