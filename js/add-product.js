var PRODUCT_DB = 'PRODUCT_DB';

function randomID() {
  return Math.floor(Math.random() * 9999999);
}
function getLocalDB() {
  return localStorage.getItem(PRODUCT_DB) ? JSON.parse(localStorage.getItem(PRODUCT_DB)) : setLocalDefDB();
}

function setLocalDB(data) {
  return localStorage.setItem(PRODUCT_DB, JSON.stringify(data));
}

window.onload = function productListPage() {
  $siderbarToggle = document.getElementById('sidebar-toggle');
  $pageSidebar = document.getElementById('page-sidebar')
  $pageContent = document.getElementById('page-content')
  $siderbarToggle.addEventListener('click', () => {
    $pageSidebar.classList.toggle('active');
    $pageContent.classList.toggle('active');
  })

  var $addbutton = document.querySelector('.create-product')
  $addbutton.addEventListener('click', (e) => {
    e.preventDefault();
    var inputName = document.getElementById('name').value
    var inputPrice = document.getElementById('price').value
    var inputAmount = document.getElementById('amount').value
    var inputDescription = document.getElementById('description').value
    var inputImage = document.getElementById('image').value
    var newItem = {
      id: randomID(),
      name: inputName,
      price: +inputPrice,
      amount: +inputAmount,
      description: inputDescription,
      image: inputImage
    }

    var getDB = getLocalDB()
    var newDB = JSON.parse(JSON.stringify(getDB));
    newDB.unshift(newItem)
    setLocalDB(newDB)
    window.location = "./product-list.html"
  })
}