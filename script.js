const root = document.documentElement

const radio1 = document.getElementById ("theme1")
const radio2 = document.getElementById ("theme2")
const radio3 = document.getElementById ("theme3")

const output = document.getElementById ("output")
const buttons = document.querySelectorAll ("button")

let mathExpression = ""

// CHANGING THEMES WITH RADIO BUTTONS

radio1.addEventListener ("click", setTheme1)
radio2.addEventListener ("click", setTheme2)
radio3.addEventListener ("click", setTheme3)

// TAKING INPUT FROM KEYPAD AND KEYBOARD

buttons.forEach (button => button.addEventListener ("click", keypadInput))
document.body.addEventListener("keydown", keyboardInput)

// FUNCTIONS

function setTheme1 () {
    root.style.setProperty ("--main-bg", "hsl(222, 26%, 31%)")
    root.style.setProperty ("--toggle-bg", "hsl(223, 31%, 20%)")
    root.style.setProperty ("--screen-bg", "hsl(224, 36%, 15%)")
    root.style.setProperty ("--del-key-bg", "hsl(225, 21%, 49%)")
    root.style.setProperty ("--del-key-shadow", "hsl(224, 28%, 35%)")
    root.style.setProperty ("--toggle-color", "hsl(6, 63%, 50%)")
    root.style.setProperty ("--equal-key-shadow", "hsl(6, 70%, 34%)")
    root.style.setProperty ("--header-text-color", "hsl(0, 3%, 94%)")
    root.style.setProperty ("--keypad-text-color", "hsl(221, 14%, 31%)")
    root.style.setProperty ("--keypad-text-color", "hsl(221, 14%, 31%)")
    root.style.setProperty ("--keypad-text-color", "hsl(221, 14%, 31%)")
    root.style.setProperty ("--other-keys-bg", "hsl(30, 25%, 89%)")
    root.style.setProperty ("--other-keys-shadow", "hsl(28, 16%, 65%)")
    root.style.setProperty ("--equal-text-color", "hsl(0, 3%, 94%)")
}

function setTheme2 () {
    root.style.setProperty ("--main-bg", "hsl(0, 0%, 90%)")
    root.style.setProperty ("--toggle-bg", "hsl(0, 5%, 81%)")
    root.style.setProperty ("--screen-bg", "hsl(0, 0%, 93%)")
    root.style.setProperty ("--del-key-bg", "hsl(185, 42%, 37%)")
    root.style.setProperty ("--del-key-shadow", "hsl(185, 58%, 25%)")
    root.style.setProperty ("--toggle-color", "hsl(25, 98%, 40%)")
    root.style.setProperty ("--equal-key-shadow", "hsl(25, 99%, 27%)")
    root.style.setProperty ("--header-text-color", "hsl(60, 10%, 19%)")
    root.style.setProperty ("--keypad-text-color", "hsl(60, 10%, 19%)")
    root.style.setProperty ("--other-keys-bg", "hsl(45, 7%, 89%)")
    root.style.setProperty ("--other-keys-shadow", "hsl(35, 11%, 61%)")
    root.style.setProperty ("--equal-text-color", "hsl(0, 3%, 94%)")
}

function setTheme3 () {
    root.style.setProperty ("--main-bg", "hsl(268, 75%, 9%)")
    root.style.setProperty ("--toggle-bg", "hsl(268, 71%, 12%)")
    root.style.setProperty ("--screen-bg", "hsl(268, 71%, 12%)")
    root.style.setProperty ("--del-key-bg", "hsl(281, 89%, 26%)")
    root.style.setProperty ("--del-key-shadow", "hsl(285, 91%, 52%)")
    root.style.setProperty ("--toggle-color", "hsl(176, 100%, 44%)")
    root.style.setProperty ("--equal-key-shadow", "hsl(177, 92%, 70%)")
    root.style.setProperty ("--header-text-color", "hsl(52, 100%, 62%)")
    root.style.setProperty ("--keypad-text-color", "hsl(52, 100%, 62%)")
    root.style.setProperty ("--equal-text-color", "hsl(198, 20%, 13%)")
    root.style.setProperty ("--other-keys-bg", "hsl(268, 47%, 21%)")
    root.style.setProperty ("--other-keys-shadow", "hsl(290, 70%, 36%)")
}

function keypadInput (e) {
    let keypadBtn = e.target

    switch (keypadBtn.textContent) {
        case "DEL": 
            output.value = output.value.slice (0, output.value.length - 1)
            mathExpression = mathExpression.slice (0, mathExpression.length - 1)

            break;

        case "RESET":
            output.value = ""
            mathExpression = ""

            break;

        case "=":
            output.value = eval (mathExpression)

            break;

        default:
            output.value += keypadBtn.textContent;

            //TO SUBSTITUE X WITH "*" BECAUSE EVAL() DOES NOT CONSIDER X AS AN OPERATOR
    
            mathExpression += (keypadBtn.textContent === "x") ? "*" : keypadBtn.textContent;
    }
}

function keyboardInput (e) {
    switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "*":
        case "+":
        case "/":
        case "-":
        case "x":
            output.value += e.key;

            mathExpression += (e.key === "x") ? "*" : e.key;

            break;
        case "Backspace":
            output.value = output.value.slice (0, output.value.length - 1)
            mathExpression = mathExpression.slice (0, mathExpression.length - 1)

            break;
        case "=":
            output.value = eval (mathExpression)

            break;
        default:
            alert ("Invalid Input!")
    }
}


