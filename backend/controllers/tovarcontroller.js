import Tovar from '../models/tovar.js';

export const findByCatigoryId = async (req, res) => {
  const categoryId = req.params.id;
  const products = await Tovar.findAll({ where: { category_id: categoryId } });
  res.json(products);
};
//получить список всех products и категорию
export const getAllProducts = async (req, res) => {
  try {
    const products = await Tovar.findAll({
      include: 'category',
      where: {},
      order: [['createdAt', 'DESC']],
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
