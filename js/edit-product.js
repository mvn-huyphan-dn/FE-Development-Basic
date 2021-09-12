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
var EDIT_ID = 'EDIT_ID';

function randomID() {
  return Math.floor(Math.random() * 9999999);
}

function getLocalDB() {
  return localStorage.getItem(PRODUCT_DB) ? JSON.parse(localStorage.getItem(PRODUCT_DB)) : setLocalDefDB();
}

function setLocalDefDB() {
  localStorage.setItem(PRODUCT_DB, JSON.stringify(defaultProductDB));
  return getLocalDB();
}

function setLocalDB(data) {
  return localStorage.setItem(PRODUCT_DB, JSON.stringify(data));
}

function getLocalEditID() {
  return localStorage.getItem(EDIT_ID) ? JSON.parse(localStorage.getItem(EDIT_ID)) : -1;
}

window.onload = function productListPage() {
  $siderbarToggle = document.getElementById('sidebar-toggle');
  $pageSidebar = document.getElementById('page-sidebar')
  $pageContent = document.getElementById('page-content')
  $siderbarToggle.addEventListener('click', () => {
    $pageSidebar.classList.toggle('active');
    $pageContent.classList.toggle('active');
  })

  var getDB = getLocalDB();
  var getEditID = getLocalEditID();
  if (getEditID === -1) {
    alert(`Local Storage hasn't stored any EDIT_ID`)
  } else {
    productIndex = getDB.findIndex(e => e.id === getEditID);

    var inputName = document.getElementById('name')
    var inputPrice = document.getElementById('price')
    var inputAmount = document.getElementById('amount')
    var inputDescription = document.getElementById('description')
    var inputImage = document.getElementById('image')

    inputName.value = getDB[productIndex].name
    inputPrice.value = getDB[productIndex].price
    inputAmount.value = getDB[productIndex].amount
    inputDescription.value = getDB[productIndex].description
    inputImage.value = getDB[productIndex].image

    var $editbutton = document.querySelector('.edit-product')
    $editbutton.addEventListener('click', (e) => {
      if (confirm('Are you sure you want to apply these changes?')) {
        e.preventDefault();
        var newItem = {
          id: getDB[productIndex].id,
          name: inputName.value,
          price: +inputPrice.value,
          amount: +inputAmount.value,
          description: inputDescription.value,
          image: inputImage.value
        }
        var newDB = JSON.parse(JSON.stringify(getDB));
        newDB[productIndex] = newItem
        setLocalDB(newDB)
        window.location = "./product-list.html"
      }
    })
  }
}
