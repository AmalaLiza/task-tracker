export default {

    addBoard() {
        return {
            type: "ADD_BOARD"
        };
    },

    editBoardTitle(boardId:number) {
        return {
            type: "EDIT_BOARD_TITLE",
            boardId
        };
    },

    addTask(title:string, boardIndex:number) {
        return {
            type: "ADD_TASK",
            title,
            boardIndex
        };
    },

    taskCompleted(boardIndex:number, taskId:number) {
        return {
            type: "TASK_COMPLETED",
            boardIndex,
            taskId
        };
    },

    playTask(task) {
        return {
            type: "PLAY_TASK",
            task
        };
    },

    pauseTask(boardIndex, taskId, progress) {
        console.log("PAUSE_TASK");
        return {
            type: "PAUSE_TASK",
            boardIndex,
            taskId,
            progress
        };
    },

    expandTask(taskId:number) {
        return {
            type: "EXPAND_TASK",
            taskId
        };
    },

    editTaskTitle(taskId:number) {
        return {
            type: "EDIT_TASK_TITLE",
            taskId
        };
    },

    deleteTask(taskId:number) {
        return {
            type: "DELETE_TASK",
            taskId
        };
    },

    searchTask(searchText:string) {
        return {
            type: "SEARCH_TASK",
            searchText
        };
    }
}