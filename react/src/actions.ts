export function addBoard() {
    return {
        type: "ADD_BOARD"
    };
}

export function saveBoard() {
    return {
        type: "SAVE_BOARD"
    };
}

export function getBoard(boardList) {
    return {
        type: "GET_BOARD",
        boardList
    };
}

export function renameBoard(newTitle, boardIndex:number) {
    return {
        type: "RENAME_BOARD",
        boardIndex,
        newTitle
    };
}

export function deleteBoard(boardIndex:number) {
    return {
        type: "DELETE_BOARD",
        boardIndex
    };
}

export function addTask(title:string, boardIndex:number) {
    return {
        type: "ADD_TASK",
        title,
        boardIndex
    };
}

export function taskCompleted(boardIndex:number, taskId:number) {
    return {
        type: "TASK_COMPLETED",
        boardIndex,
        taskId
    };
}

export function playTask(boardId:number, taskId:number) {
    return {
        type: "PLAY_TASK",
        boardId,
        taskId
    };
}

export function pauseTask(boardId:number, taskId:number, progress:number) {
    return {
        type: "PAUSE_TASK",
        boardId,
        taskId,
        progress
    };
}

export function expandTask(boardIndex:number, taskIndex:number, isExpanded) {
    return {
        type: "EXPAND_TASK",
        boardIndex,
        taskIndex,
        isExpanded
    };
}

export function hideTask() {
    return {
        type: "HIDE_TASK"
    };
}

export function deleteTask(taskIndex:number, boardIndex:number) {
    return {
        type: "DELETE_TASK",
        taskIndex,
        boardIndex
    };
}

export function saveTask(updatedInfo) {
    return {
        type: "SAVE_TASK",
        updatedInfo
    };
}

export function searchTask(searchText:string) {
    return {
        type: "SEARCH_TASK",
        searchText
    };
}