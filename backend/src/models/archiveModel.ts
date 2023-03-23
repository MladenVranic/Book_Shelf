import { Schema, model, Document} from 'mongoose';

//interface 
export interface IArchive{
    user_id:number,
    book_id:number
}

export interface IArchiveModel extends IArchive, Document{};

//schema
const archiveSchema = new Schema({
    user_id: {type:Number, required: true},
    book_id: {type: Number, required: true}
});

//Model
const Archive = model<IArchiveModel>('Archive', archiveSchema);

//exports 
export default Archive;