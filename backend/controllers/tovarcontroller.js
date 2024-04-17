import Tovar from "../models/tovar.js"

export const findByCatigoryId = async (req,res) => {
    const categoryId = req.params.id
    const products = await Tovar.findAll({where: {category_id: categoryId}})
    res.json(products)
}