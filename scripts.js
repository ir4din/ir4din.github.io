function showCategory(categoryClass) {
  // همه محصولات را پنهان کن
  var allItems = document.getElementsByClassName('menu-item');
  for (var i = 0; i < allItems.length; i++) {
      allItems[i].style.display = 'none';
  }

  // تنها دسته کلیک شده را نمایش بده
  var selectedItems = document.getElementsByClassName(categoryClass);
  for (var j = 0; j < selectedItems.length; j++) {
      selectedItems[j].style.display = 'flex';
  }
}
