///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    boardList: [{
        id: 1,
        title: "Design",
        taskList: [{
            id: 1,
            title: "Create designs for insight screen",
            estimatedTime: "2hrs"
        }, {
            id: 2,
            title: "Create designs for insight screen",
            estimatedTime: "2hrs"
        }, {
            id: 3,
            title: "Create designs for insight screen",
            estimatedTime: "2hrs"
        }
        ]
    }]
})

export function rootReducer(state = initialState, action) {

    console.log(state, action);
    switch (action.type) {

        case "ADD_BOARD":
            let newBoard = Immutable.fromJS({
                id: state.get("boardList").reduce((maxId, board) => Math.max(board.id, maxId), -1) + 1,
                title: "New Board",
                taskList: Immutable.List()
            });
            state = state.updateIn(['boardList'], boardList => boardList.push(newBoard));

            return state;

        default:
            return state;
    }
}