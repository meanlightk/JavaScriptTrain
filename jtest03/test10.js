let address = "Seoul";
let members = {};
let addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};
let getHeadcount = function() {
    return Object.keys(this.members).length;
};

let family = {address, members, addFamily, getHeadcount};

family.addFamily(30, "chole", "brother");
family.addFamily(3, "lyn", "sister");
family.addFamily(10, "badugi", "dog");
console.log(family.getHeadcount());