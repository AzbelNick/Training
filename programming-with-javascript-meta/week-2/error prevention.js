function addTwoNums(a,b){
    try{
        if(typeof(a) != "number") {
            throw(ReferenceError, "the first argument is not a number")
        } else if(typeof(b) != "number") {
            throw(ReferenceError, "the second argument is not a number")
        } else(console.log(a +b))

    console.log(a + b)
    } catch(err) {
        console.log("error!", err)
    }
}
addTwoNums(5, "5");
console.log("it still works")