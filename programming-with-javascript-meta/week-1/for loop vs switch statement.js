//for loop
for (var i = 1; i <= 10; i++) {
    if (i == 1) {console.log("gold")
    }
    else if (i == 2) {console.log("silver")
    }
    else if (i == 3) {console.log("bronze")
    }
    else {console.log(i)}
};

//switch statement
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("gold")
            break
        case 2:
            console.log("silver")
            break
        case 3:
            console.log("bronze")
            break
        default:
            console.log (i)
    }
}