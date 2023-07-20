'use strict';



const year = 1111

const lasha = {
    name:'lasha',
    year: 1998,
    calcAge: function (currentyear= 2023){
        return currentyear - this.year
    },
    x: function (){
        return `My name is ${this.name} and I am ${this.calcAge()} years old`
    }
}

console.log(lasha.x());
