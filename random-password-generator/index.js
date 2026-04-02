function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
{
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschars = "0123456789";
    const symbolschars = "!@#$%^&*";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowercase ? lowercasechars : "";
    allowedchars += includeUppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberschars : "";
    allowedchars += includeSymbols ? symbolschars : "";

    if(length <= 0) {
        return "Password length must be at least 1";
    }

    if(allowedchars.length === 0) {
        return "Select at least one character type";
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}

function createPassword() {
    const length = document.getElementById("length").value;
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    document.getElementById("result").value = password;
}