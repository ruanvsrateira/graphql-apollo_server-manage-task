import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Task, TaskModel } from '../schema/task.schema';
import { TaskService } from '../service/task.service';

@Resolver()
export class TaskResolver {
    constructor(private taskService: TaskService){
        this.taskService = new TaskService();
    }

    @Query(() => [Task])
    async tasks() {
        return await this.taskService.get()
    };

    @Mutation(() => Task) 
    async createTask(
        @Arg('title') title: string,
        @Arg('status') status: string,
    ) {
        return this.taskService.create(title, status);
    };

    @Mutation(() => Task)
    async deleteTask(@Arg('id') id: string) {
        return this.taskService.delete(id)
    };

    @Mutation(() => Task)
    async updateTask(
        @Arg('id') id: string,
        @Arg('title') title: string,
        @Arg('status') status: string,
    ) {
        return this.taskService.update(id, title, status);
    };
};