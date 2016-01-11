export default {

    addBoard(){
        return {
            type: "ADD_BOARD"
        };
    },

    editBoardTitle(boardId){
        return {
            type: "EDIT_BOARD_TITLE",
            boardId
        };
    },

    addTask(value, boardIndex){
        return {
            type: "ADD_TASK",
            value,
            boardIndex
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

    editTaskTitle(taskId){
        return {
            type: "EDIT_TASK_TITLE",
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