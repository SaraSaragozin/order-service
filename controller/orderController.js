exports.getOrders = (req, res) => {
    res.json([
        { id: 1, product: 'Product A', user: 'John Doe' },
        { id: 2, product: 'Product B', user: 'Jane Doe' }
    ]);
};
