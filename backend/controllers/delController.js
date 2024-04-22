import Delivery from "../models/delivery.js";

export const create = async (req, res) => {
  try {
    await Delivery.create(req.body);
    res.json({
      message: "Kohaletoimetamine loodud",
    });
  } catch (error) {
    res.status(401).json({ msg: "Kohaletoimetamist ei loodud" });
  }
};

export const findAll = async (req, res) => {
  try {
    await Delivery.findAll().then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
