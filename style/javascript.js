let users = [
    { name: 'Саша', age: 24 },
    { name: 'Артем', age: 32 },
    { name: 'Ирина', age: 27 },
    { name: 'Евгений', age: 49 },
    { name: 'Петя', age: 21 },
];



function sortUsersByKey(keyForSorting) {
    users = users.sort(function (a, b) {
        if (a[keyForSorting] < b[keyForSorting]) {
            return -1;
        }
        if (a[keyForSorting] > b[keyForSorting]) {
            return 1;
        }
        return 0;
    });
    newTable();
}


function newTable() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    render();
}



const tableBody = document.getElementById('table-body')
function render() {

    users.forEach((user, index) => {
        tableBody.appendChild(renderTableTr(user, index));
    })
}


function renderTableTr(user, idx) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${idx}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
    `;
    return tr;
}

render();

const sortBlockElement = document.getElementsByClassName('sortBlock')[0];

sortBlockElement.addEventListener('click', (event) => {
    const eventButtonClassName = event.target.className;
    debugger
    switch (eventButtonClassName) {
        case 'nameSortButton':
            sortUsersByKey('name')
            break;
        case 'ageSortButton':
            sortUsersByKey('age')
            break;
        default:
            break;
    }
})