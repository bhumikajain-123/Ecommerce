
  let qty = document.getElementById('quantity');
  let increase = document.getElementById('increase');
  let decrease = document.getElementById('decrease');

  increase.addEventListener('click', () => {
    let value = parseInt(qty.value);
    qty.value = value + 1;
  });

  decrease.addEventListener('click', () => {
    let value = parseInt(qty.value);
    if (value > 1) {
      qty.value = value - 1;
    }
  });
