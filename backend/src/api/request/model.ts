import { model,Schema } from "mongoose";
import { RequestEntity } from "./entity";
import { json } from "body-parser";

const RequestSchema = new Schema<RequestEntity>({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    telefono:{type:String,required:true},
    messaggio:{type:String,required:true},
    data_invio:{type:Date,required:true}
});

export const RequestModel = model<RequestEntity>('Request',RequestSchema);