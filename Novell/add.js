let addbtn = document.querySelector('li.add');
let mana = document.querySelector('main');
addbtn.addEventListener('click', aadElementFunction);

function aadElementFunction() {
    let newDiv = document.createElement('div');
    let addh2 = document.createElement('h2');
    let addA = document.createElement('a');
    let papa = document.createElement('p');
    let foto = document.createElement('img');
    let addh3 = document.createElement('h3');

    newDiv.className = 'box1';
    addh2.className = 'name';
    newDiv.textContent = 'Пример создания';
    addA.href = 'index5.php';
    addA.title = 'кликни';    
    papa.className = 'one';
    foto.src = 'icon-dow.png';
    foto.className = 'fito';
    addh3.textContent = 'B  Пример нашего сайта для работ в виде новелл';
    addh3.className = 'index1';

 
    mana.appendChild(newDiv);
    newDiv.appendChild(addh2);
    newDiv.appendChild(addA);
    addA.appendChild(papa);
    papa.appendChild(foto);
    newDiv.appendChild(addh3);
}
