var toDo = [
    "acordar",
    "arrumar o quarto",
    "escovar os dentes",
    "treinar forte",
    "estudar",
    "jogar futebol",
    "comer bem"
];

var toDoImportant = [
    "acordar!!!",
    "arrumar o quarto!!!",
    "escovar os dentes!!!",
    "treinar forte!!!",
    "estudar!!!",
    "jogar futebol!!!",
    "comer bem!!!"
];

// for (var i = 0; i < toDo.length; i++) {
//     toDo[i] = toDo[i] + "!";
//     console.log(toDo[i]);
// }

// toDo.forEach(function(todo, i){
//     console.log(todo, 1);
// })

function logTodos (todo, i) {
    console.log(todo, i);
}

// Chama a matriz (array), depois chama o forEach dizendo que é pra cada índice e depois chama a função que é para ser resolvida
toDo.forEach(logTodos);
toDoImportant.forEach(logTodos);

// var count = 0;
// while (count < 11) {
//     console.log(count);
//     count++;
// }

// var count = 10;
// while (count >= 0) {
//     console.log(count);
//     count--;
// }

// var count2 = 10;
// do {
//     console.log(count2);
//     count2--;
// } while (count2 > 0);
