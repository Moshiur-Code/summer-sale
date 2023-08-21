// console.log('js file added');

let total = 0;

function itemCard(target){
    // console.log(target.childNodes[3].childNodes[3].innerText);
    const selectedItemContainer = document.getElementById('selected-item');

    const itemName = target.childNodes[3].childNodes[3].innerText;
    // console.log(itemName);
    const li = document.createElement('li');
    li.innerText = itemName;
    console.log(li);

    selectedItemContainer.appendChild(li);

    // console.log(target.childNodes[3].childNodes[5].innerText.split(" ")[0]);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);
    
    console.log(total);
   document.getElementById('total-price').innerText = total;

}