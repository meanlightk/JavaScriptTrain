let family = {
    "address":"seoul",
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount: function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, "chole", "brother");
family.addFamily(3, "lyn", "sister");
family.addFamily(10, "badugi", "dog");

let printMembers = function() {
    let members = family.members;
    for(role in members) {
        console.log("role => " + role + ", name => " + members[role].name + ". age => " + members[role].age);
    }
};
printMembers();

let members = family.members;
members["nephew"] = {age: 3, name: "hyun"};
members.sister = {age: 5, name: "lyn"};
delete members.brother;
delete members["dog"];
printMembers();