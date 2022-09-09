import { ApolloError } from 'apollo-server';
import { TaskModel } from '../schema/task.schema';

export class TaskService {
    async get() {
        const tasks = await TaskModel.find({});
    
        return tasks;
    };

    async create(title: string, status: string) {
        const taskCreated = await TaskModel.create({ title, status });
        
        return taskCreated;
    };

    async delete(id: string) {
        const taskDeleted = await TaskModel.findByIdAndDelete(id);

        if(taskDeleted) {
            return taskDeleted;
        } else {
            throw new ApolloError('task not found by id');
        };
    };

    async update(id: string, title: string, status: string ) {
        const taskUpdated = await TaskModel.findByIdAndUpdate(id, {
            title, status
        }, { new: true });

        if (taskUpdated) {
            return taskUpdated;
        } else {
            throw new ApolloError('task not found by id')
        }
    };
}