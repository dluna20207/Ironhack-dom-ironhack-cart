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

let deleteProductList = $cart.getElementsByClassName("btn btn-delete");

for (let i = 0; i < deleteProductList.length; i++) {
  let deleteList = deleteProductList[i];
  deleteList.addEventListener('click', function (element) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    calcAll()
  });
}

let selectName = document.getElementsByClassName("new")[0];

$cart.getElementById("create").addEventListener("click", $cart.appendChild(`<tr class="product">
        <td class="name">
          <span>${selectName}</span>
        </td>
    
        <td class="pu">
          $<span>${selectPU}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
      </tr>`));