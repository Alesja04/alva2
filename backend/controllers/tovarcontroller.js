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

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Tovar.destroy({where:{id:id}}) 
  return res.json({ })
}

export const editProduct = async (req, res) => {
  const id = req.params.id;
  const {name, price}=req.body;
  await Tovar.update({name:name, price:price}, {where:{id:id}})
  return res.json({ })
}