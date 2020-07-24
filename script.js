    //  increaseButton1
    const increaseButton1 = document.getElementById('increaseButton1');
    increaseButton1.addEventListener('click', function(){
      updateIncreaseButton(1219,'inputItem1','priceItem1');
    })
    //  decreaseButton1
    const decreaseButton1 = document.getElementById('decreaseButton1');
    decreaseButton1.addEventListener('click', function(){
      updateDecreaseButton(1219,'inputItem1','priceItem1');
    })
    //  increaseButton2
    const increaseButton2 = document.getElementById('increaseButton2');
    increaseButton2.addEventListener('click', function(){
      updateIncreaseButton(59,'inputItem2','priceItem2');
    })
    // decreaseButton2
    const decreaseButton2 = document.getElementById('decreaseButton2');
    decreaseButton2.addEventListener('click', function(){
      updateDecreaseButton(59,'inputItem2','priceItem2')
    })

    // increase function
    function updateIncreaseButton(fixedPrice, id1, id2){
      const inputItem = document.getElementById(id1).value;
      const inputNumberItem = parseFloat(inputItem);
      const numberStr = 1;
      const number = parseFloat(numberStr);
      const totalIncrease = inputNumberItem + number;
      document.getElementById(id1).value = totalIncrease;
      // increase newPriceItem
      const fixedNumberPrice = parseFloat(fixedPrice);
      const newPriceItem = fixedPrice * totalIncrease;
      document.getElementById(id2).innerText = newPriceItem;
      // increase subtotal
      const subtotalCost = document.getElementById("subtotalCost").innerText;
      const subtotalNumberCost = parseFloat(subtotalCost);
      const newSubtotal = subtotalNumberCost + fixedNumberPrice;
      document.getElementById('subtotalCost').innerText = newSubtotal;
      //  increase tax
      const taxCost = document.getElementById('taxCost').innerText;
      const taXNumberCost = parseFloat(taxCost);
      const parTax = 5;
      const parNumberTax = parseFloat(parTax);
      const newTaxCost = taXNumberCost + parNumberTax;
      document.getElementById('taxCost').innerText = newTaxCost;
      // increase Total
      const newTotalCost = newSubtotal + newTaxCost;
      document.getElementById('totalCost').innerText = newTotalCost;
    }

    // DecreaseFunction
    function updateDecreaseButton(fixedPrice, id3, id4){
      const inputItem = document.getElementById(id3).value;
      const inputNumberItem = parseFloat(inputItem);
      const numberStr = 1;
      const number = parseFloat(numberStr);
      const totalDecrease = inputNumberItem - number;
      if(inputItem <= 0){
        alert('Not defined');
        inputItem = 0;
      }
      document.getElementById(id3).value = totalDecrease;
      // decrease newPriceItem
      const fixedNumberPrice = parseFloat(fixedPrice);
      const newPriceItem = fixedPrice * totalDecrease;
      document.getElementById(id4).innerText = newPriceItem;
      // decrease subtotal
      const subtotalCost = document.getElementById("subtotalCost").innerText;
      const subtotalNumberCost = parseFloat(subtotalCost);
      const newSubtotal = subtotalNumberCost - fixedNumberPrice;
      document.getElementById('subtotalCost').innerText = newSubtotal;
      // decrease tax
      const taxCost = document.getElementById('taxCost').innerText;
      const taXNumberCost = parseFloat(taxCost);
      const parTax = 5;
      const parNumberTax = parseFloat(parTax);
      const newTaxCost = taXNumberCost - parNumberTax;
      document.getElementById('taxCost').innerText = newTaxCost;
      // decrease total
      const newTotalCost = newSubtotal - newTaxCost;
      document.getElementById('totalCost').innerText = newTotalCost;
    }

  // removeItem
  removeItem('removeItem1','cartItem1');
  removeItem('removeItem2','cartItem2');

  function removeItem(id5, id6){
    const removeItem2 = document.getElementById(id5);
    removeItem2.addEventListener('click', function(){
    const cartItem2 = document.getElementById(id6);
    cartItem2.style.display = "none";
  })
}

 //checkButton
 const checkButton = document.getElementById('checkButton');
 checkButton.addEventListener('click', function(){
   const lastPart = document.getElementById('container1');
   lastPart.style.display = "none";
   const container2 = document.getElementById('container2');
   container2.style.display = "block";
 })
