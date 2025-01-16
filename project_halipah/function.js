// 1
function greeting () {
    console.log("Good Morning!")
}
greeting();

//2
function greeting (name , leangue) {
    if(leangue === "english") {
        console.log (`Good Morning ${name}!`);
    } else if (leangue === "french") {
        console.log (`bonjour ${name}!`);
    }else {
        console.log (`Selamat pagi ${name}!`);
    }
}

greeting("Zio" , "french");

// 3
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 4)
console.log(result);

// 4
const rawr = (name, leangue)  => {
    if(leangue === "english") {
        return "Good Morning" + name + "!";
    }else if (leangue === "french") {
        return "Bonjour" + name + "!";
    }else {
        return "Selamat pagi" + name + "!";
    }
}


console.log(rawr(' Halipah' , 'english'));