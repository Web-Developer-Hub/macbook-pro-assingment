// memory, storage, delivery function 
function specificationBtn(price, item) {
    const memory = document.getElementById(item + '-cost');
    memory.innerText = price;

};

// total cost js code
function totalCost() {
    const extraMemoryPrice = document.getElementById('memory-cost');
    const memoryCost = parseInt(extraMemoryPrice.innerText);
    const extraStoragePrice = document.getElementById('storage-cost');
    const storageCost = parseInt(extraStoragePrice.innerText);
    const extraDeliveryCharge = document.getElementById('delivery-cost');
    const deliveryCharge = parseInt(extraDeliveryCharge.innerText);
    const total = document.getElementById('total-price');
    const total1 = document.getElementById('promo-total-price');
    const totalPrice = 1299;
    total.innerText = memoryCost + storageCost + deliveryCharge + totalPrice;
    total1.innerText = memoryCost + storageCost + deliveryCharge + totalPrice;
};


// promo code js code 
document.getElementById('promo-code-btn').addEventListener('click', function () {
    const inputField = document.getElementById('promo-code-input');
    const promoInput = inputField.value;
    const total = document.getElementById('promo-total-price');
    const totalPrice = parseInt(total.innerText);
    if (promoInput == 'stevekaku') {
        total.innerText = totalPrice - ((totalPrice * 20) / 100);
        inputField.value = '';
    }
    else {
        inputField.value = "Enter Valid promo code!!";
        inputField.style.color = 'red';
    }
});


// memory specification js code
document.getElementById('8gbMemory-btn').addEventListener('click', function () {
    specificationBtn(0, 'memory');
    totalCost();
});
document.getElementById('16gbMemory-btn').addEventListener('click', function () {
    specificationBtn(180, 'memory');
    totalCost();
});

// storage specification js code
document.getElementById('256gbStorage-btn').addEventListener('click', function () {
    specificationBtn(0, 'storage');
    totalCost();
});
document.getElementById('512gbStorage-btn').addEventListener('click', function () {
    specificationBtn(180, 'storage');
    totalCost();
});
document.getElementById('1tbStorage-btn').addEventListener('click', function () {
    specificationBtn(380, 'storage');
    totalCost();
});


// delivery js code
document.getElementById('free-delivery').addEventListener('click', function () {
    specificationBtn(0, 'delivery');
    totalCost();
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    specificationBtn(20, 'delivery');
    totalCost();
});