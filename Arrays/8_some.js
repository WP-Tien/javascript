const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 5 },
    { name: 'Book', price: 400 },
    { name: 'Phone', price: 1 },
    { name: 'Computer', price: 600 },
    { name: 'Keyboard', price: 3 },
    { name: 'Desktop', price: 2 },
    { name: 'Monitor', price: 900 },
]

// Kiểm tra item nào có price cao
const hasInexpensiveItems = items.some( (item) => {
    return item.price > 800;
});

console.log( hasInexpensiveItems );