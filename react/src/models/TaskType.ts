export type TaskType = {
    id: number,
    title: string,
    completed : Boolean,
    estimatedTime: number,
    description:string,
    priority:number,
    progress:string,
    due_date: string,
    dependencies:string,
    notes:string,
    activity:string,
    createdAt:Date
};