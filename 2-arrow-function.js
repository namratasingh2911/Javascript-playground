//ES5 function
const squaree = function(value){
    return value * value;

}
console.log(squaree(3));

//ES6 function
const square = (x) => {
    return x * x
}
console.log(square(3));

const squareee = (x) => x*x;
console.log(squareee(3));



const event ={
    name : 'Birthday party',
    printGuestList :  function(){
        console.log('Guest list for ' + event.name);
    }
}

event.printGuestList();

const eventt ={
    namee : 'Birthday party',
    guestList : ['Namrata','Abhimanyu','Monika'],
    printGuestListt() {
        console.log('Guest list for ' + this.namee);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.namee);
        
        })
    }
}

eventt.printGuestListt();


