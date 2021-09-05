var productDB = [
  {
    'id': 1,
    'name': 'iPhone 12 Pro Max',
    'price': 1099,
    'image': './images/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg'
  },
  {
    'id': 2,
    'name': 'iPhone 12',
    'price': 699,
    'image': './images/iphone-12-do-600x600.jpg'
  },
  {
    'id': 3,
    'name': 'iPhone 11',
    'price': 505,
    'image': './images/iphone-11-xanhla-600x600.jpg'
  },
  {
    'id': 4,
    'name': 'iPhone SE 2020',
    'price': 246,
    'image': './images/iphone-se-128gb-2020-do-600x600.jpg'
  },
  {
    'id': 5,
    'name': 'iPhone XR',
    'price': 319,
    'image': './images/iphone-xr-128gb-600x600.jpg'
  },
  {
    'id': 6,
    'name': 'Samsung Galaxy Z Fold 3',
    'price': 1525,
    'image': './images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg'
  },
  {
    'id': 7,
    'name': 'Samsung Galaxy Z Flip 3',
    'price': 939,
    'image': './images/samsung-galaxy-z-flip-3-violet-1-600x600.jpg'
  },
  {
    'id': 8,
    'name': 'Samsung Galaxy S21 Ultra',
    'price': 826,
    'image': './images/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg'
  },
  {
    'id': 9,
    'name': 'Samsung Galaxy Note 20',
    'price': 975,
    'image': './images/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg'
  }
];

var CART_LIST = 'CART_LIST';
var cartNumber = 0;
var trCartEmpty = `<tr class="tr cart-item">
<td colspan=3 style="display:table-cell;padding: 10px 0">
Your Cart is empty
</td>
</tr>`;

function getLocalCart() {
  return localStorage.getItem(CART_LIST) ? JSON.parse(localStorage.getItem(CART_LIST)) : [];
}

function setLocalCart(data) {
  return localStorage.setItem(CART_LIST, JSON.stringify(data));
}

function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}

function updateCartBadge(e) {
  var cartBadge = document.getElementById('cart-badge');
  cartNumber += e;
  if (cartNumber === 0) {
    cartBadge.classList.add('hide');
  } else if (cartNumber === 1) {
    cartBadge.classList.remove('hide');
  }
  cartBadge.innerHTML = cartNumber;
}

function addItemToLocal(id) {
  var getCart = getLocalCart();
  var indexCart = findObjectByKey(getCart, 'id', +id);
  if (indexCart === -1) {
    getCart.push({
      'id': id,
      'amount': 1
    })
  } else {
    getCart[indexCart]['amount'] += 1;
  }
  setLocalCart(getCart);
  updateCartBadge(1);
}

function removeItemFromLocal(id) {
  var getCart = getLocalCart();
  var indexRemoveItem = findObjectByKey(getCart, 'id', +id);
  var removeAmount = getCart[indexRemoveItem]['amount']
  var newCart = getCart.filter(function (e) {
    return e.id !== +id;
  })
  setLocalCart(newCart);
  updateCartBadge(-removeAmount);
  var $cartList = document.querySelector('.cart-list');
  if (newCart.length === 0)
    $cartList.innerHTML = trCartEmpty;
}

function loadLocalToUI() {
  var getCart = getLocalCart();
  var $cartList = document.querySelector('.cart-list');
  var cartBadge = document.getElementById('cart-badge');
  var html = '';

  if (getCart.length === 0) {
    html += trCartEmpty;
  } else {
    getCart.forEach(function (e) {
      var indexCart = findObjectByKey(getCart, 'id', +e.id)
      html += `<tr class="tr cart-item" data-id="` + e.id + `">
      <td class="td">
        <a href="">
          <img src="`+ productDB[indexCart]['image'] + `" alt="Product Img">
        </a>
        <span>`+ productDB[indexCart]['name'] + `</span>
      </td>
      <td class="td">`+ e.amount + `</td>
      <td class="td">
        <button class="btn btn-outline remove-item">Remove</button>
      </td>
    </tr>`
    })
  }

  $cartList.innerHTML = html;

  if (getCart.length === 0) {
    cartBadge.classList.add('hide');
  } else {
    for (var i in getCart) {
      cartNumber += getCart[i]['amount'];
    }
  }
  cartBadge.innerHTML = cartNumber;
};

window.onload = function cartPage() {
  loadLocalToUI();

  var $cartList = document.querySelector('.cart-list');
  $cartList.addEventListener('click', function (e) {
    if (e.target.className === 'btn btn-outline remove-item') {
      if(confirm('Are you sure you want to remove this item?')) {
        e.target.parentElement.parentElement.remove();
        removeItemFromLocal(e.target.parentElement.parentElement.dataset.id);
      }
    }
  })
};
