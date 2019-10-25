function aclean(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let sorted = array[i].toLowerCase().split("").sort().join("");
        obj[sorted] = array[i];
    }

    return Object.values(obj);
}
let array = ["Сон", "Лепесток", "Вот", "НоС", "тоВ", "ТОВ", "Телескоп"];

console.log('Fifth task:',aclean(array) );