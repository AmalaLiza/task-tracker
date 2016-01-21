export default {

    addBoard() {
        return {
            type: "ADD_BOARD"
        };
    },

    renameBoard(newTitle, boardIndex:number) {
        return {
            type: "RENAME_BOARD",
            boardIndex,
            newTitle
        };
    },

    deleteBoard(boardIndex:number) {
        return {
            type: "DELETE_BOARD",
            boardIndex
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

    playTask(boardId:number, taskId:number, progress:number) {
        return {
            type: "PLAY_TASK",
            boardId,
            taskId,
            progress
        };
    },

    pauseTask(boardId:number, taskId:number, progress:number) {
        return {
            type: "PAUSE_TASK",
            boardId,
            taskId,
            progress
        };
    },

    expandTask(boardIndex:number, taskIndex:number, isExpanded) {
        return {
            type: "EXPAND_TASK",
            boardIndex,
            taskIndex,
            isExpanded
        };
    },

    hideTask(boardId:number, taskId:number, isExpanded) {
        return {
            type: "HIDE_TASK",
            boardId,
            taskId,
            isExpanded
        };
    },

    editTaskTitle(taskId:number) {
        return {
            type: "EDIT_TASK_TITLE",
            taskId
        };
    },

    deleteTask(taskId:number, boardIndex:number) {
        return {
            type: "DELETE_TASK",
            taskId,
            boardIndex
        };
    },

    searchTask(searchText:string) {
        return {
            type: "SEARCH_TASK",
            searchText
        };
    }
}