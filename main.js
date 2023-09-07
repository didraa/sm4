let price = parseFloat(prompt("Введите стоимость товара:"));
let money = parseFloat(prompt("Введите количество денег клиента:"));
let div = document.createElement('div');


if (price === money) {
    div.textContent = 'Покупка совершена';
    div.style.backgroundColor = 'lightgray';
    div.style.padding = '10px';

    document.getElementById('container').appendChild(div);

} else if (price > money) {
    let lack = price - money;
    let text = "Для покупки не хватает " + Math.abs(lack) + " р."

    div.textContent = text;
    div.style.backgroundColor = 'lightgray';
    div.style.padding = '10px';

    document.getElementById('container').appendChild(div);

} else {
    let ok = money - price;
    let text = "Покупка совершена. Сдача " + ok + " р.";
    div.textContent = text;
    div.style.backgroundColor = 'lightgray';
    div.style.padding = '10px';

    document.getElementById('container').appendChild(div);
}

// let number = parseInt(prompt("Введите цифру:"));
//
// for (let i = 0; i < number; i++) {
//     let block = document.createElement('div');
//     block.classList.add('block');
//     block.textContent = 'Блок ' + (i+1);
//     document.body.appendChild(block);
// }
