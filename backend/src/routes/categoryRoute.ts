import express, {  Request,Response } from 'express';
import Category from '../models/categoryModel';
import Book from '../models/bookModel';
//app instance
const router = express.Router();

//create route 
router.get('/', (req: Request ,res: Response) => {
        return Category.find({}).then((Category) => {
                res.status(200).json({Category})       
        })
});

//category by id
router.get('/:id', (req: Request, res:Response) => {
        const cat_id = req.params.id;
        return Book.find({category_id:cat_id}).then((Book) => {
                res.status(200).json({Book});
        });
})

export default router;