import {Injectable} from "angular2/core";

@Injectable()
export default class Task {
    constructor(public text:string = "", public time:string = "00:00") {
    }
}