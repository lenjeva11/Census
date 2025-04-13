const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const villageController = require('../controllers/villageController');

// CREATE
router.post(
  '/',
  [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('numberOfCitizens').isInt({ min: 1 }).withMessage('Number of citizens must be at least 1'),
    body('leader').isString().notEmpty().withMessage('Leader name is required')
  ],
  villageController.createVillage
);

// READ ALL
router.get('/', villageController.getAllVillages);

// READ ONE
router.get('/:id',
  [param('id').isMongoId().withMessage('Invalid ID')],
  villageController.getVillageById
);

// UPDATE
router.put(
  '/:id',
  [
    param('id').isMongoId().withMessage('Invalid ID'),
    body('name').optional().isString().withMessage('Name must be a string'),
    body('numberOfCitizens').optional().isInt({ min: 1 }).withMessage('Must be a positive integer'),
    body('leader').optional().isString().withMessage('Leader name must be a string')
  ],
  villageController.updateVillage
);

// DELETE
router.delete(
  '/:id',
  [param('id').isMongoId().withMessage('Invalid ID')],
  villageController.deleteVillage
);

module.exports = router;
