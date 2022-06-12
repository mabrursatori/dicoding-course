const BOOKS= 'BOOKS';
const books = [];

const isStorageExist = () =>  {
    if (typeof (Storage) === undefined) {
      alert('Browser kamu tidak mendukung local storage'); 
      return false;
    }
    return true;
  }

const loadDataFromStorage = () => {
    const data = JSON.parse(localStorage.getItem(BOOKS));
    console.log(data);
    console.log(books);
    if(data !== null){
        for(let i = 0; i < data.length; i++){
            books.push(data[i]);
        }
    }
    console.log(books);
    updateStorage();
}

const updateStorage = () => {
    localStorage.setItem(BOOKS, JSON.stringify(books));
    renderHTML();
}

const checkStorage = id => {
    books.forEach(book => {
        if(book.id === id) book.isReaded = true;
    });
    updateStorage();
}

const undoStorage = id => {
    books.forEach(book => {
        if(book.id === id) book.isReaded = false;
    });
    updateStorage();
}

const removeStorege = book => {
    let index = books.indexOf(book);
    books.splice(index, 1);
    updateStorage();
}


const addStorege = book => {
    books.unshift(book);
    updateStorage();
}

const generatedID = () =>{
    return new Date().getTime();
}

const componentBookNotReaded = book => {
let itemBookElement = document.createElement('div');
    itemBookElement.classList.add('item-book');
    itemBookElement.innerHTML =`<div class="book-detail">
    <h5>${book.name}</h5>
    <p>${book.genre}</p>
    </div>`;

let buttonCheck = document.createElement('button')
buttonCheck.classList.add('btn-check');
buttonCheck.addEventListener('click', () => {
    console.log(book.id);
    checkStorage(book.id);
});
itemBookElement.append(buttonCheck);

    return itemBookElement; 

}   

const componentBookReaded = book => {
    let itemBookElement = document.createElement('div');
    itemBookElement.classList.add('item-book');
    itemBookElement.innerHTML =`<div class="book-detail">
    <h5>${book.name}</h5>
    <p>${book.genre}</p>
    </div>`;

    let buttonUndo = document.createElement('button')
    buttonUndo.classList.add('btn-undo');
    buttonUndo.addEventListener('click', () => {
        undoStorage(book.id);
        console.log(book.id);
    });
    let buttonRemove = document.createElement('button')
    buttonRemove.classList.add('btn-remove');
    buttonRemove.addEventListener('click', () => {
        removeStorege(book);
    });
    let groupButton = document.createElement('div');
    groupButton.append(buttonUndo);
    groupButton.append(buttonRemove);
    itemBookElement.append(groupButton);
    return itemBookElement; 
}


const renderHTML = () => {
    
    const notReaded = [...books].filter((item) => !item.isReaded);
    const readed = [...books].filter((item) => item.isReaded);
    const containerNotReaded =  document.querySelector('.not-readed');
    containerNotReaded.innerHTML = '';
    const containerReaded = document.querySelector('.readed');
    containerReaded.innerHTML = '';
    const messageEmptyNotReaded = document.querySelector('.message-notreaded');
    const messageEmptyReaded = document.querySelector('.message-readed');

    if(notReaded.length){
      messageEmptyNotReaded.classList.add('message-hidden');
        notReaded.forEach((item) => {
            containerNotReaded.append(componentBookNotReaded(item));
        });
    }else{
        messageEmptyNotReaded.classList.remove('message-hidden');
    }

    if(readed.length){
        messageEmptyReaded.classList.add('message-hidden');
        readed.forEach(item => {
            containerReaded.append(componentBookReaded(item));
        })
    }else{
        messageEmptyReaded.classList.remove('message-hidden');
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    if (isStorageExist()) {
      loadDataFromStorage();
    }
  });

  const buttonSave = document.getElementById('submit');
  buttonSave.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let genre = document.getElementById('genre').value;
    if(!name){
        alert("Harap isi nama buku!");
        event.preventDefault();
        return;
    } 
    if(!genre){
        alert("Harap isi genre buku!");
        event.preventDefault();
        return;
    }
    addStorege({id: generatedID() ,name, genre, isReaded: false});
    
    event.preventDefault();
});

