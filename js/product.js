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
  var indexCart = getCart.length !== 0? findObjectByKey(getCart,'id', +id): -1;
  if (indexCart === -1) {
    getCart.push({
      'id': +id,
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
}

function loadLocalToUI() {
  var getCart = getLocalCart();
  var $productList = document.querySelector('.product-list');
  var cartBadge = document.getElementById('cart-badge');
  var html = '';
  productDB.forEach(function (e) {
    html += `<li class="product-item" data-id="` + e.id + `">
    <a href="#" class="product-img">
      <div>
        <img src="`+ e.image + `" alt="Product Image">
      </div>
    </a>
    <div class="product-info">
      <h3 class="product-name">
        <a href="">`+ e.name + `</a>
      </h3>
      <span class="product-price">$ `+ e.price + `</span>
    </div>
    <a href="" class="btn btn-outline add-item">Add to Cart</a>
  </li>`
  });
  $productList.innerHTML = html;

  if (getCart.length === 0) {
    cartBadge.classList.add('hide');
  } else {
    for (var i in getCart) {
      cartNumber += getCart[i]['amount'];
    }
  }
  cartBadge.innerHTML = cartNumber;
};

window.onload = function productPage() {
  loadLocalToUI();

  var $productList = document.querySelector('.product-list');
  $productList.addEventListener('click', function(e) {
    if(e.target.className === 'btn btn-outline add-item') {
      e.preventDefault();
      addItemToLocal(e.target.parentElement.dataset.id);
    }
  })
};
