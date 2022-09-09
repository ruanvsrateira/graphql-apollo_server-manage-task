import { prop, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Task {

    @Field()
    _id: string;

    @Field()
    @prop({ required: true })
    title: string;

    @Field()
    @prop({ required: true })
    status: string;
    
}

export const TaskModel = getModelForClass(Task);
