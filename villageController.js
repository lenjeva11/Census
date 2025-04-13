const Village = require('../model/Village');

// CREATE
exports.createVillage = async (req, res) => {
  try {
    const { name, numberOfCitizens, leader } = req.body;
    const village = new Village({ name, numberOfCitizens, leader });
    await village.save();
    res.status(201).json(village);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
exports.getAllVillages = async (req, res) => {
  try {
    const villages = await Village.find();
    res.json(villages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
exports.getVillageById = async (req, res) => {
  try {
    const village = await Village.findById(req.params.id);
    if (!village) return res.status(404).json({ message: 'Village not found' });
    res.json(village);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateVillage = async (req, res) => {
  try {
    const updatedVillage = await Village.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedVillage) return res.status(404).json({ message: 'Village not found' });
    res.json(updatedVillage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteVillage = async (req, res) => {
  try {
    const village = await Village.findByIdAndDelete(req.params.id);
    if (!village) return res.status(404).json({ message: 'Village not found' });
    res.json({ message: 'Village deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
