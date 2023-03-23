import { Schema, model, Document} from 'mongoose';

//book interface
export interface IBook{
    name:String,
    category_id:Number
}

export interface IBookModel extends IBook, Document{}

//book schema
const bookSchema = new Schema({
    name: {type:String},
    category_id: {type: Number}
});

//Model
const Book = model<IBookModel>('Book', bookSchema);

//exports 
export default Book;