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
    while (decision !== "yes" || decision !== "no") {
        var decision = prompt("Will you follow me?");
        if (decision === "yes") {
            console.log(`You are wise beyond your years ${name}. Your journey has only just begun.`)
            break
        } else if (decision === "no") {
            console.log(alert("Coward!"))
            break
        } else {
            console.log(alert("That is not an acceptable answer."))
        }
    }
    // ====YES DECISION===
    var weapon = "";
    var punishment = "";
    if (decision === "yes") {
        while (weapon !== "sword" || decision !== "axe") {
            var weapon = prompt("To begin your adventure, you must choose a weapon. Would you like an axe or a sword?");
            if (weapon === "axe") {
                console.log(alert(`Here is your ${weapon}. Now begin your quest.`))
                return
            } else if (weapon === "sword") {
                console.log(alert(`Here is your ${weapon}. Now begin your quest.`))
                return
            } else {
                console.log(alert("That is not an option."))
            }
        }
        // ====NO DECISION=====
    } else if (decision === "no") {
        while (punishment !== "prison" || punishment !== "banished") {
            var punishment = prompt("You will now face the consequences! Will you face prison or will you be banished from this land?");
            if (punishment === "prison") {
                console.log(alert(`You are now going to ${punishment}.`))
                return
            } else if (punishment === "banished") {
                console.log(alert(`You will now be ${punishment}.`))
                return
            } else {
                console.log(alert("Choose now or face an even worse fate."))
            }
        }
    }



}

console.log(controlFlow())