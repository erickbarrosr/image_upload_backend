const Picture = require("../models/Picture");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;

    const picture = new Picture({
      name,
      source: file.path,
    });

    await picture.save();

    res.json({ picture, message: "Imagem enviada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao enviar imagem!" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();

    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: "Erro ao encontrar imagem!" });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada!" });
    }

    fs.unlinkSync(picture.source);

    await picture.remove();

    res.json({ message: "Imagem removida com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir iamgem!" });
  }
};
