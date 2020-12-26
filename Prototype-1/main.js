// for (let item of document.querySelectorAll('.product-item')) {
//   item.addEventListener('click', function () {
//     if (!item.classList.contains('disabled')) {
//       this.classList.toggle('active');
//     }
//   });
// }

// let itemDesc = document.querySelectorAll('.product-item.disabled');
// for (itemD of itemDesc) {
//   let nameLink = itemD.querySelector('.product-item__link');
//   let nameDesc = itemD.querySelector('.product-item__name-desc');
//   nameLink.innerHTML = `<p class="product-item__link-disabled">Печалька, ` + nameDesc.innerHTML + ` закончился.</p>`
// }

for (let _i = 0, _a = document.querySelectorAll('.product-item'); _i < _a.length; _i++) {
  let item = _a[_i];
  item.addEventListener('click', function () {
    if (!item.classList.contains('disabled')) {
      this.classList.toggle('active');
    }
  });
}

let itemDesc = document.querySelectorAll('.product-item.disabled');
for (let _b = 0; _b < itemDesc.length; _b++) {
  itemD = itemDesc[_b];
  let nameLink = itemD.querySelector('.product-item__link');
  let nameDesc = itemD.querySelector('.product-item__name-desc');
  nameLink.innerHTML = '<p class="product-item__link-disabled">Печалька, ' + nameDesc.innerHTML + ' закончился.</p>';
}