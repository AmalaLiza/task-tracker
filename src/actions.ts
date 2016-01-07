export default {

    addTask(task){
        return {
            type: "ADD_TASK",
            task
        };
    },
    addBoard(board){
        return {
            type: "ADD_BOARD",
            board
        };
    },
    taskCompleted(taskId){
        return {
            type: "TASK_COMPLETED",
            taskId
        };
    },
    playTask(taskId){
        return {
            type: "PLAY_TASK",
            taskId
        };
    },
    pauseTask(taskId){
        return {
            type: "PAUSE_TASK",
            taskId
        };
    },
    expandTask(taskId){
        return {
            type: "EXPAND_TASK",
            taskId
        };
    },
    deleteTask(taskId){
        return {
            type: "DELETE_TASK",
            taskId
        };
    }
}