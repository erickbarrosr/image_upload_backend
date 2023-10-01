const Picture = require("../models/Picture");

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
