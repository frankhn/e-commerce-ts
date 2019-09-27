import express from 'express';
import Attributes from './attributes.controller';
import Attributes_values from './attribute_values/attribute_values.controller';

const attributes_router = express.Router();

// create car instance
const attribute = new Attributes();
const AttributesValues = new Attributes_values()

// get all attributes
attributes_router.get('/', attribute.getMany);

// get one attribute by ID
attributes_router.get('/:id(\\d+)', attribute.readOne);

// get values of attribute from attribute
attributes_router.get('/values/:attributeID(\\d+)', AttributesValues.attributeValues);


export default attributes_router;
