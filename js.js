var list = [
    "burritos",
    "banana",
    "thirdthingy",
];

var BTN = document.getElementById("myButton");
var doThings = function(event){
    alert("I'm not copying that :skull:");
    console.log(event);
};

for(var i=0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    newBTN.innerHTML = list[i];
    document.body.append(newBTN);

    newBTN.addEventListener("click", doThings);

}

