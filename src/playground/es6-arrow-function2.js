const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(50, 10));

const user = {
    name: "Taylor",
    cities: ["Surrey", "Kamloops"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplied = {
    numbers: [5, 10, 20],
    multplyBy: 3,
    multiply () {
        return this.numbers.map((number) => this.multplyBy * number);
    }
}

console.log(multiplied.multiply());