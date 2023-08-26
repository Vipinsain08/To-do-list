document.getElementById('lab').addEventListener('click', function() {
    const itemList = document.getElementById('item-list');
    const listItem = itemList.firstElementChild.cloneNode(true); 

    itemList.appendChild(listItem); 
});

