//Creating objects

let person = {
    firstName:'Toky',
    lastName:'Chanthavong',
    age:40
}

// console.log(person.firstName)
// console.log(person['lastName'])

let meal = {
    appetizer:'chips and salsa',
    entree:'steak and bean burrito',
    dessert:'fried ice cream',
    drink:'water'
}

// let dessert = meal.dessert
let {dessert, entree, appetizer, drink: bestSodaEver} = meal

// let {entree, appetizer} = meal

// let {drink: bestSodaEver} = meal
// console.log(dessert + ',' + entree + ',' + appetizer)
// console.log(meal)


//For in loops

// for (let food in meal){
//     console.log(`For ${food} I had ${meal[food]}`)
// }

//Adding, changing, and deleting properties from objects

person.occupation = 'I am a student at Devmountain'

person.age = 41

delete person.lastName

// console.log(person)

//Classes and extending classes

class Pet {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}



class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed
    }

    bark(){
        console.log(`Bark, my name is ${this.name}`)
    }
}

let lassie = new Dog('Lassie', 7, 'Collie')

console.log(lassie)
lassie.bark()

class Cat extends Pet {
    constructor(name, age, color){
        super(name, age)
        this.color = color,
        this.temperment = 'mean'
    }

    beNIce(){
        this.temperment = 'nice'
        console.log(`${this,this.name} is now a nice cat`)
    }
}

let macy = new Cat('Macy', 2, 'grey')
macy.beNIce()
console.log(macy)
