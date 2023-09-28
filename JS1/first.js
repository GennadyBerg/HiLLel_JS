outside:
while (true) {
    let userName = prompt("enter Your name");
    ///////////////name correct check
    if (userName === null) {
        alert("we canseling name enter")
        break
    }
    else if (userName === "") {
        alert("we didn't enter name")
    }
    else if (!isNaN(userName)) {
        alert("we enter number")
    }
    ////////////age correct check
    else {
        while (true) {
            let userAge = +prompt("enter Your age")
            if (userAge === null) {
                alert("we canseling age enter")
                break
            }
            else if (userAge === "") {
                alert("we didn't enter any age")
            }
            else if (isNaN(userAge)) {
                alert("we  dont enter number")
            }
            ////////////////check adult age
            else {
                if (userAge < 18) {
                    alert('You are not allowed to visit this website.')
                    break outside
                }
                else if (18 <= userAge && userAge <= 22) {
                    if (confirm('Are You sure you want to continue?')) {
                        alert("WElcome" + userName)
                        break outside
                    }
                    else { "You are not allowed to visit this website" }
                    break outside
                }

                else {
                    alert("WElcome" + " " + userName)
                    break outside
                }
            }
        }
     }
}            