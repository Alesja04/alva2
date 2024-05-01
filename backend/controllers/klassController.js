import Klassid from "../models/klassid.js";

export const create = async (req, res) => {
  console.log("text")
  try {
    await Klassid.create(req.body);
    res.json({
      message: "Te olete registreeritud ",
    });
  } catch (error) {
    res.status(401).json({ msg: "Te ei ole registreeritud " });
  }
};

export const findAll = async (req, res) => {
  try {
    await Klassid.findAll().then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};