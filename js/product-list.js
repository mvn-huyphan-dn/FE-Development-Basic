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
var EDIT_ID = 'EDIT_ID';
var trDBEmpty = `<tr>
<td colspan=6 style="display:table-cell;padding: 10px 0">
Your database is empty
</td>
</tr>`;

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

function setViewIDLocal(data) {
  return localStorage.setItem(VIEW_ID, JSON.stringify(data));
}

function setEditIDLocal(data) {
  return localStorage.setItem(EDIT_ID, JSON.stringify(data));
}

function removeItemFromDB(id) {
  var getDB = getLocalDB();
  var newDB = getDB.filter((e) => e.id !== +id)
  setLocalDB(newDB);
  if (newDB.length === 0)
  $productList.innerHTML = trDBEmpty;
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
  var $productList = document.querySelector('.product-list');
  var html = '';
  if (getDB.length === 0) {
    html += trDBEmpty;
  } else {
    getDB.forEach((e) => {
      html += `<tr class="product-item" data-id="td-${e.id}">
      <th scope="row">${e.id}</th>
      <td class="image-td">
        <div class="product-image">
          <img src="${e.image}" class="img-thumbnail" alt="Product Img">
        </div>
      </td>
      <td>${e.name}</td>
      <td>${e.amount}</td>
      <td>$ ${e.price}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example" data-id="${e.id}">
          <button type="button" class="btn btn-info view-item"><i class="fas fa-eye"></i></button>
          <button type="button" class="btn btn-warning edit-item"><i class="fas fa-edit"></i></button>
          <button type="button" class="btn btn-danger delete-item"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`
    })
  }
  $productList.innerHTML = html;

  $productList.addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-danger delete-item') {
      if(confirm('Are you sure you want to remove this item?')) {
        e.preventDefault();
        document.querySelector(`[data-id="td-${e.target.parentElement.dataset.id}"]`).remove();
        removeItemFromDB(e.target.parentElement.dataset.id);
      }
    }

    if (e.target.className === 'btn btn-info view-item') {
      setViewIDLocal(+e.target.parentElement.dataset.id);
      window.location.href = './product-detail.html'
    }

    if (e.target.className === 'btn btn-warning edit-item') {
      setEditIDLocal(+e.target.parentElement.dataset.id)
      window.location.href = './edit-product.html'
    }
  })
};
