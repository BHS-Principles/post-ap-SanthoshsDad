var list = [
    "burritos",
    "banana",
    "thirdthingy",
];

var BTN = document.getElementById("myButton");

for(var i=0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    alert("whatever" + list[i]);
}

//I'm gonna save my changes