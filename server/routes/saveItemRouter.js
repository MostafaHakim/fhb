const express = require('express')
const router = express.Router()
const SaveItem = require('../model/saveItemsModel'); // New model to save items with additional properties

// Route to save updated items
router.post('/', async (req, res) => {
    try {
        const { items, date, totalAmount, totalQuantity, } = req.body;
        const newSave = new SaveItem({
            date,
            totalAmount,
            totalQuantity,
            items
        });

        await newSave.save();
        res.status(201).json({ message: 'Items saved successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
