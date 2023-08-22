
let total = 0;

function itemCard(target){

    const selectedItemContainer = document.getElementById('order-list');

    const itemName = target.childNodes[3].childNodes[3].innerText;


    const li = document.createElement('li');
    li.innerText = itemName;
    console.log(li);

    selectedItemContainer.appendChild(li);


    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);


   document.getElementById('total-price').innerText = total;

  let discountAmount = total;
  let payPrice = total;

  if(discountAmount >= 200) {
    discountAmount = (discountAmount * 20) / 100;
    payPrice = total - discountAmount;
  } else {
    discountAmount = 0;
  }
 
  document.getElementById('discount-amount').innerText = discountAmount;

  document.getElementById('pay-total').innerHTML = payPrice;
}