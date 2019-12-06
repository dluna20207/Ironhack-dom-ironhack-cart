var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1

  let unitPrice = Number($product.querySelector(".product .pu span").innerHTML);
  let qty = Number($product.querySelector(".product .qty label input").value);

  let subTotal = unitPrice * qty;

  $product.querySelector(".subtot span").innerHTML = subTotal;
}

function calcAll() {
  updateSubtot();
}
$calc.onclick = calcAll;