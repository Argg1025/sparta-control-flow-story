function controlFlow() {
    console.log(alert("You wake up in a forest and a mysterious man approaches you."))
    // ====CONTROL 1====
    var age = "";
    while (typeof age !== 'number') {
        var age = prompt("How old are you?")
        if (age < 18) {
            console.log(alert("This is no place for children."))
            return;
        } else if (age > 60) {
            console.log(alert("This is no place for a person of your years."))
            return;
        } else if (age >= 18 && age <= 60) {
            console.log(alert("Just as I thought."))
            age = parseInt(age)
        } else {
            console.log(alert("That is not an age."))
        }
    }
    // ====CONTROL 2====
    var name = "";
    while (name == false) {
        var name = prompt("What is your name?");
        if (name) {
            console.log(alert(`${name} you say? We have been expecting you.`))
        } else {
            console.log(alert("No, your real name?"));
        }
    }


    // ====CONTROL 3====
    var decision = ""
    while (name == false) {
        var decision = prompt("Will you follow me?");
        if (decision === "yes") {
            console.log(`You are wise beyond your years ${name}. Your journey has only just begun.`)
        } else if (decision === "no") {
            console.log("Coward! Be gone from here!")
            return
        } else {
            console.log(alert("That is not an acceptable answer."))
        }
    }
}
console.log(controlFlow())