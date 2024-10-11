const cartItems = document.getElementsByClassName('cart-item');

for (const item of cartItems) {
  item.addEventListener('click', cartClick);
}

function cartClick(event) {
  const clickedItemId = event.currentTarget.id; // Get the clicked item's ID

  for (const itm of cartItems) {
    const lowerSection = itm.querySelector('.lower');
    
    if (itm.id === clickedItemId) {
      lowerSection.style.display = 'block';
      itm.style.border = '2px solid rgba(255, 107, 130, 1)';
    } else {
      lowerSection.style.display = 'none';
      itm.style.border = '1px solid rgba(200, 200, 200, 1)';
    }
  }
}

const ellipse = document.querySelectorAll('.ellipse');
for (const el of ellipse) {
  el.addEventListener('click', toggleEllipse);
}

function toggleEllipse(e){
  const innerDiv = e.currentTarget.querySelector('div');
  
  if (innerDiv) {
    if (innerDiv.style.display === 'block') {
      innerDiv.style.display = 'none';
    } else {
      innerDiv.style.display = 'block';
    }
  }
}
