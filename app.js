// get product price in the dom
function getProductPrice(id, productPrice) {
    const costProduct = document.getElementById(id);
    let costProductValue = costProduct.innerText;
    const totalCostProduct = costProductValue = productPrice;
    costProduct.innerText = parseInt(totalCostProduct);
    calculateProductPrice();
}
// calculate  total product price 
function calculateProductPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-charge').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    totalProductPrice(totalCost);
}

// update total Product Price
function totalProductPrice(totalProductCost) {
    document.getElementById('total-price').innerText = totalProductCost;
    document.getElementById('final-total').innerText = totalProductCost;
}
// get memory cost 
document.getElementById('eight-gb').addEventListener('click', function() {
    const eightGb = 0;
    getProductPrice('memory-cost', eightGb);
});
// get memory cost 
document.getElementById('sixteen-gb').addEventListener('click', function() {
    const sixTeenGb = 180;
    getProductPrice('memory-cost', sixTeenGb);
});
//get storage cost 
document.getElementById('two-gb').addEventListener('click', function() {
    const twoHundredGb = 0;
    getProductPrice('storage-cost', twoHundredGb);
});
//get storage cost 
document.getElementById('five-gb').addEventListener('click', function() {
    const fiveHundredGb = 100;
    getProductPrice('storage-cost', fiveHundredGb);
});
// get storage  cost
document.getElementById('one-tb-gb').addEventListener('click', function() {
    const oneTerabyteGb = 180;
    getProductPrice('storage-cost', oneTerabyteGb)
});
//get delivery cost 
document.getElementById('aug-twenty-five').addEventListener('click', function() {
    const augTwentyFiveDelivery = 0;
    getProductPrice('delivery-charge', augTwentyFiveDelivery);
});
// get delivery cost 
document.getElementById('aug-twenty-one').addEventListener('click', function() {
    const augTwentyOneDelivery = 20;
    getProductPrice('delivery-charge', augTwentyOneDelivery);
});

// promo code
document.getElementById('promo-code').addEventListener('click', function() {
    const promoCode = 'stevekaku';
    const getPromoCode = document.getElementById('promo-value');
    const promoCodeValue = getPromoCode.value;
    const totalPromoValue = document.getElementById('total-price').innerText;
    const promoTotalPrice = parseFloat(totalPromoValue);
    if (promoCode == promoCodeValue) {
        const promoTotal = (promoTotalPrice / 10) * 2;
        const promoDiscount = promoTotalPrice - promoTotal;
        document.getElementById('total-price').innerText = promoDiscount;
        document.getElementById('final-total').innerText = promoDiscount;
    }
    getPromoCode.value = '';
});