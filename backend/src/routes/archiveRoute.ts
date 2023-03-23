import express, {  Request,Response } from 'express';
import Category from '../models/categoryModel';
import Book from '../models/bookModel';
import Archive from '../models/archiveModel';
//router instance
const router = express.Router();


//route
router.get("/:userId", (req: Request, res: Response) => {
    const uId = req.params.userId;
    return Archive.find({user_id: uId}).then((Archive) => {
        res.status(200).json({Archive})
    })
});

export default router;