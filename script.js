// if click on the + button, raise the number inside
// of the empty box up by 1
const addOne = ( ) => {
    var plusOne=document.getElementById("inputButton").value;
    let (i = 0; i < 10; i++) {
        return plusOne + 1;
    }
};
const answer = ( ) => {
    document.getElementById("emptySpot").innerHTML= addOne();
}
const upOne = ( ) => {
    return 1;
};
const upone = ( ) => {
    document.getElementById("emptySpot").innerHTML= upOne();
}



// If click on the - button, raise the number inside the 
// empty box by 1.