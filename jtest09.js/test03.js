// 배열 길이 구하기(length)
const ship = {
    max: 4,
    passenger: [],
    onBoard: function (name) {
        if (this.passenger.length === 4) {
            console.log(`This ship is full. ${name} can not board this ship.`);
        } else {
            this.passenger.push(name);
            console.log(`${name} boarded.`);
        }
    }
}

ship.onBoard('chole');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passenger)