var defaultProductDB = [
  {
    'id': 1,
    'name': 'iPhone 12 Pro Max',
    'price': 1099,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg'
  },
  {
    'id': 2,
    'name': 'iPhone 12',
    'price': 699,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/iphone-12-do-600x600.jpg'
  },
  {
    'id': 3,
    'name': 'iPhone 11',
    'price': 505,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/iphone-11-xanhla-600x600.jpg'
  },
  {
    'id': 4,
    'name': 'iPhone SE 2020',
    'price': 246,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/iphone-se-128gb-2020-do-600x600.jpg'
  },
  {
    'id': 5,
    'name': 'iPhone XR',
    'price': 319,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/iphone-xr-128gb-600x600.jpg'
  },
  {
    'id': 6,
    'name': 'Samsung Galaxy Z Fold 3',
    'price': 1525,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg'
  },
  {
    'id': 7,
    'name': 'Samsung Galaxy Z Flip 3',
    'price': 939,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/samsung-galaxy-z-flip-3-violet-1-600x600.jpg'
  },
  {
    'id': 8,
    'name': 'Samsung Galaxy S21 Ultra',
    'price': 826,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg'
  },
  {
    'id': 9,
    'name': 'Samsung Galaxy Note 20',
    'price': 975,
    'amount': 50,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sapiente expedita vitae nihil perferendis dolor error quod corrupti deserunt, neque totam similique accusantium eveniet quam. Ducimus esse obcaecati ut rem!',
    'image': './images/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg'
  }
];


var PRODUCT_DB = 'PRODUCT_DB';
var VIEW_ID = 'VIEW_ID';

function getLocalDB() {
  return localStorage.getItem(PRODUCT_DB) ? JSON.parse(localStorage.getItem(PRODUCT_DB)) : setLocalDefDB();
}

function setLocalDefDB() {
  localStorage.setItem(PRODUCT_DB, JSON.stringify(defaultProductDB));
  return getLocalDB();
}

function getLocalViewID() {
  return localStorage.getItem(VIEW_ID) ? JSON.parse(localStorage.getItem(VIEW_ID)) : -1;
}

window.onload = function productDetailPage() {
  $siderbarToggle = document.getElementById('sidebar-toggle');
  $pageSidebar = document.getElementById('page-sidebar')
  $pageContent = document.getElementById('page-content')
  $siderbarToggle.addEventListener('click', () => {
    $pageSidebar.classList.toggle('active');
    $pageContent.classList.toggle('active');
  })

  var getDB = getLocalDB();
  var getViewID = getLocalViewID();
  if (getViewID === -1) {
    alert(`Local Storage hasn't stored any VIEW_ID`)
  } else {
    productIndex = getDB.findIndex(e => e.id === getViewID);
    var productImg = document.querySelector('#product-img')
    productImg.src = getDB[productIndex].image;
    var productID = document.querySelector('.product-id')
    productID.innerHTML = getDB[productIndex].id;
    var productName = document.querySelector('.product-name')
    productName.innerHTML = getDB[productIndex].name;
    var productPrice = document.querySelector('.product-price')
    productPrice.innerHTML = getDB[productIndex].price;
    var productPrice = document.querySelector('.product-description')
    productPrice.innerHTML = getDB[productIndex].description;
  }
}