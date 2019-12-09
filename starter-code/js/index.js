var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1

  let unitPrice = Number($product.querySelector(".pu span").innerHTML);
  let qty = Number($product.querySelector(".qty label input").value);

  let subTotal = unitPrice * qty;

  $product.querySelector(".subtot span").innerHTML = subTotal;
  return subTotal;
}

function calcAll() {

  let productCollection = $cart.getElementsByClassName("product");
  let $product;
  let sumSubtotal = 0;

  for (let i = 0; i < productCollection.length; i++) {
    $product = productCollection[i];
    sumSubtotal += updateSubtot($product);
  }

  document.querySelector("h2 span").innerHTML = sumSubtotal;

  updateSubtot();
}
$calc.onclick = calcAll;