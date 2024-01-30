const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector("#todo_list");

const editTodo = (todoElement, textElement) => {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = textElement.innerHTML;

    const okButton = document.createElement('button');
    okButton.innerHTML = 'OK';

    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Отмена';

    modal.append(input, okButton, cancelButton);
    document.body.appendChild(modal);

    okButton.onclick = () => {
        const newText = input.value.trim();
        if (newText !== '') {
            textElement.innerHTML = newText;
            modal.remove();
        } else {
            alert('Нельзя оставлять пустоту');
        }
    };

    cancelButton.onclick = () => {
        modal.remove();
    };
};

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Нельзя вводить пустоту или пробелы');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');

    const divButtons = document.createElement('button');
    divButtons.setAttribute('class', 'div_buttons');

    const text = document.createElement('h3');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerHTML = 'DELETE';
    editButton.innerHTML = 'EDIT';
    text.innerHTML = input.value;
    divButtons.append(deleteButton, editButton);
    div.append(text, divButtons);

    deleteButton.onclick = () => div.remove();
    text.addEventListener('click', () => text.classList.toggle('toogle'));
    editButton.onclick = () => editTodo(div, text);

    todoList.prepend(div);
    input.value = '';
};

createButton.onclick = () => createTodo();
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
};
