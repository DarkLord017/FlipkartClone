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
