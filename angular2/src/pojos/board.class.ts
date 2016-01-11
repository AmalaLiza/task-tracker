import * as Immutable from "immutable";

export default class Board{
    constructor(public title = "default title", public tasks:string[] = ["eat", "sleep", "code"]) {
    }

}