let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user,'name');
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", {
    value: "jeado",
    enumberable: true,
    configurable: true,
    writable: false
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
    name: "jeado",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumberable: false
});

// toString 속성은 enumberable를 false로 정의하여 출력되지 않음
for (let key in user3) {
    console.log(key);
}

/* configurable가 false리사 delete를 통해 name 속성을 지우려고 하면 
해당 속성이 지워지지 않고, false가 리턴됨*/
let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
});
delete user4.name
    console.log(user4);
    Object.defineProperty(user4, "name", {
    writable: true
});