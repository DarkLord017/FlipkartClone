import Product from '../model/product-schema.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
        console.log('products', products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const getProductById = async (req, res) => {
    try {
        console.log('req.params.id', req.params.id)
        const id = req.params.id;
        const product = await Product.findOne({ 'id': id });
        res.status(200).json(product);
        console.log('product', product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}