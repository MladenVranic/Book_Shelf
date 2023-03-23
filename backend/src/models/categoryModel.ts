import { Schema, model, Document} from 'mongoose';

//interface representing the document in DB
export interface ICategory {
    name: String
};

export interface ICategoryModel extends ICategory, Document {}


//schema corresponding to the interface
const categorySchema: Schema = new Schema<ICategory>({
    name: {type: String, required: true}
});

//Model
const Category = model<ICategoryModel>('Category', categorySchema);

//export model
export default Category;