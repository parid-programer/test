class Person{
    constructor(height, weight){
        this.weight = weight
        this.height = height
    }

    print(){
        console.log(this.weight);
        console.log(this.height);
    }
}

const person1 = new Person(45, 54)

person1.print()
