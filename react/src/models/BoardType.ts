import {TaskType} from "./TaskType";

export type BoardType = {
        id: number,
        title: string,
        taskList: TaskType[]
};