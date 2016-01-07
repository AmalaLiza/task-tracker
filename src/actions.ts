export default {

    addTask(task: any): any {
        return {type: "ADD_TASK", task};
    }
}