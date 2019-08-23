let freeFields = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
function handleButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button.value === "") {
        button.value = "X";
        const index = freeFields.indexOf(buttonId);
        freeFields.splice(index, 1);
        const b1 = document.getElementById("b1")
        const b2 = document.getElementById("b2")
        const b3 = document.getElementById("b3")
        const b4 = document.getElementById("b4")
        const b5 = document.getElementById("b5")
        const b6 = document.getElementById("b6")
        const b7 = document.getElementById("b7")
        const b8 = document.getElementById("b8")
        const b9 = document.getElementById("b9")
        if (b1.value === "X" && b2.value === "X" && b3.value === "X") {
            alert("Player Wins!")
        } else if (b4.value === "X" && b5.value === "X" && b6.value === "X") {
            alert("Player Wins!")
        } else if (b7.value === "X" && b8.value === "X" && b9.value === "X") {
            alert("Player Wins!")
        } else if (b1.value === "X" && b5.value === "X" && b9.value === "X") {
            alert("Player Wins!")
        } else if (b3.value === "X" && b5.value === "X" && b7.value === "X") {
            alert("Player Wins!")
        } else if (b1.value === "X" && b4.value === "X" && b7.value === "X") {
            alert("Player Wins!")
        } else if (b2.value === "X" && b5.value === "X" && b8.value === "X") {
            alert("Player Wins!")
        } else if (b3.value === "X" && b6.value === "X" && b9.value === "X") {
            alert("Player Wins!")
        }

        botTurn();
        if (b1.value === "O" && b2.value === "O" && b3.value === "O") {
            alert("Bot Wins!")
        } else if (b4.value === "O" && b5.value === "O" && b6.value === "O") {
            alert("Bot Wins!")
        } else if (b7.value === "O" && b8.value === "O" && b9.value === "O") {
            alert("Bot Wins!")
        } else if (b1.value === "O" && b5.value === "O" && b9.value === "O") {
            alert("Bot Wins!")
        } else if (b3.value === "O" && b5.value === "O" && b7.value === "O") {
            alert("Bot Wins!")
        } else if (b1.value === "O" && b4.value === "O" && b7.value === "O") {
            alert("Bot Wins!")
        } else if (b2.value === "O" && b5.value === "O" && b8.value === "O") {
            alert("Bot Wins!")
        } else if (b3.value === "O" && b6.value === "O" && b9.value === "O") {
            alert("Bot Wins!")
        }
    }
}
function b1() {
    handleButton("b1");
}
function b3() {
    handleButton("b3");
}
function b4() {
    handleButton("b4");
}
function b5() {
    handleButton("b5");
}
function b2() {
    handleButton("b2");
}
function b6() {
    handleButton("b6");
}
function b7() {
    handleButton("b7");
}
function b8() {
    handleButton("b8");
}
function b9() {
    handleButton("b9");
}
function botTurn() {
    if (freeFields.length > 0) {
        const fieldIndex = Math.floor(Math.random() * freeFields.length);
        const buttonId = freeFields[fieldIndex];
        document.getElementById(buttonId).value = "O";
        const botIndex = freeFields.indexOf(buttonId);
        freeFields.splice(botIndex, 1);
    }
}
