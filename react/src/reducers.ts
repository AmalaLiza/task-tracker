///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

const initialState = {
    boardList: [{
        id: 1,
        title: "Design",
        taskList: [{
            id: 1,
            title: "Create designs for insight screen",
            estimatedTime: "2hrs"
        }]
    }]
};

export function rootReducer(state = initialState, action) {

    console.log(state, action);
    switch (action.type) {
        case "ADD_BOARD":
            return {
                boardList: [
                    ...state.boardList,
                    {
                        id: state.boardList.reduce((maxId, taskGroup) => Math.max(taskGroup.id, maxId), -1) + 1,
                        title: "New Board",
                        taskList: []
                    }
                ]
            };

        default:
            return state;
    }
}