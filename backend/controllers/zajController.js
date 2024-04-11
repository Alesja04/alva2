import Zajavka from "../models/zajavka.js";

export const create = async (req, res) => {
  try{
      await Zajavka.create(req.body);
      res.json({
        message: 'Zajavka Created',
     });
  }catch (error) {
    res.status(401).json({ msg: 'Zajavka ne sozdana...' });
  }
};

export const findAll= async (req, res) => {
  try{
    await Zajavka.findAll().then((data) => res.status(200).json(data));
  }catch (error) {
    res.status(404).json({ msg: error });
  }
};