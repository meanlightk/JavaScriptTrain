const symbol = Symbol();
const hello = Symbol("hello");

console.log(Number(3) === Number(3));
console.log(Symbol("symbol") === Symbol("symbol"));
console.log(Symbol() === Symbol());
console.log(typeof symbol());

const nationally = symbol("nationility");
const user = {
    name : "jay"
};
user[nationally] = "korean";
console.log(user[nationally]);