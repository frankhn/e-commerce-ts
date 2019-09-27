import express from 'express';
import Category from './category.controller';

const category_router = express.Router();

// create car instance
const category = new Category();


// get all categories
category_router.get('/', category.getMany);

// get one category by ID
category_router.get('/:id(\\d+)', category.readOne);

// get category of a product
category_router.get('/inProduct/:productID(\\d+)', category.productCategories);

// get categories of a department
category_router.get('/inDepartment/:departmentID(\\d+)', category.categoriesInADepartment);


export default category_router;
