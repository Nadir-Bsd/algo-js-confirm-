
function factorial(n) {
    if (n < 0) return "Factorial for negative numbers is not defined";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};



function luckToWin(chevPart, chevJoués){

    var x = factorial(chevPart) / factorial(chevPart - chevJoués)
    var y = factorial(chevPart) / (factorial(chevJoués) * factorial(chevPart - chevJoués))

    console.log(`Dans l'ordre : une chance sur ${x} de gagner`);
    console.log(`Dans le désordre : une chance sur ${y} de gagner`);
}

luckToWin(80, 10);
