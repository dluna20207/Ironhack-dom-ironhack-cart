var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = $product.getElementsByClassName("pu");
  console.log(unitPrice);
  let subTotal = unitPrice * $product.getElementsByClassName("qty");

  $product.getElementsByClassName("subtot") = subTotal;
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;