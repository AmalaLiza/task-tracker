exports.default = {
    addBoard() {
        return {
            type: "ADD_BOARD"
        };
    },
    editBoardTitle(boardId) {
        return {
            type: "EDIT_BOARD_TITLE",
            boardId
        };
    },
    addTask(title, boardIndex) {
        return {
            type: "ADD_TASK",
            title,
            boardIndex
        };
    },
    taskCompleted(boardIndex, taskId) {
        return {
            type: "TASK_COMPLETED",
            boardIndex,
            taskId
        };
    },
    playTask(taskId) {
        return {
            type: "PLAY_TASK",
            taskId
        };
    },
    pauseTask(taskId) {
        return {
            type: "PAUSE_TASK",
            taskId
        };
    },
    expandTask(taskId) {
        return {
            type: "EXPAND_TASK",
            taskId
        };
    },
    editTaskTitle(taskId) {
        return {
            type: "EDIT_TASK_TITLE",
            taskId
        };
    },
    deleteTask(taskId) {
        return {
            type: "DELETE_TASK",
            taskId
        };
    },
    searchTask(searchText) {
        return {
            type: "SEARCH_TASK",
            searchText
        };
    }
};
//# sourceMappingURL=actions.js.map