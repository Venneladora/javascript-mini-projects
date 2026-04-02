const minnum = 0;
const maxnum = 100;

const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempts = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptText = document.getElementById("attempts");

button.onclick = function () {
    let guess = Number(input.value);

    if (isNaN(guess)) {
        message.textContent = "❌ Enter a valid number";
        return;
    }

    if (guess < minnum || guess > maxnum) {
        message.textContent = `⚠️ Enter between ${minnum}-${maxnum}`;
        return;
    }

    attempts++;

    if (guess < answer) {
        message.textContent = "📉 Too Low!";
    }
    else if (guess > answer) {
        message.textContent = "📈 Too High!";
    }
    else {
        message.textContent = `🎉 Correct! Number was ${answer}`;
        button.disabled = true;
    }

    attemptText.textContent = `Attempts: ${attempts}`;
};