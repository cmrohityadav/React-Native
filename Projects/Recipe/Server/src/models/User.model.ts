import mongoose,{Document, Schema} from "mongoose";

export interface UserSchemaInterface extends Document{
    email:string;
    password:string;
}

const userSchema=new Schema<UserSchemaInterface>({
    email:{
       type:String,
       required:true,
       unique:true, 
    },
    password:{
       type:String,
       required:true,
       unique:true, 
    },
});

export const  User =mongoose.model<UserSchemaInterface>('User',userSchema);
