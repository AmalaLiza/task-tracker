import {Injectable} from "angular2/core";

@Injectable()
export default class TaskService {
    constructor(public title:string = "task text empty"){
    }
}