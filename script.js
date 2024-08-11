const itemList = document.getElementById('item-list');
const subtotalElement = document.getElementById('subtotal');
const discountAmountElement = document.getElementById('discount-amount');
const totalElement = document.getElementById('total');

let items = [];

function addItem() {
    const itemName = document.getElementById('item-name').value.trim();
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter valid item name and price.');
        return;
    }

    items.push({ name: itemName, price: itemPrice });
    updateItemList();
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
}

function updateItemList() {
    itemList.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ₹${item.price.toFixed(2)}`;
        itemList.appendChild(listItem);
    });
}

function calculateBill() {
    const discountPercentage = parseFloat(document.getElementById('discount').value) || 0;

    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
        alert('Please enter a valid discount percentage.');
        return;
    }

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const discountAmount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discountAmount;

    subtotalElement.textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
    discountAmountElement.textContent = `Discount: -₹${discountAmount.toFixed(2)}`;
    totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
}
