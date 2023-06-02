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
console.log(family.getHeadcount());