import {Component} from 'angular2/core';
import {TaskService} from "../main/task.service";
import {NgStyle} from 'angular2/common';
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'footer',
    styleUrls: ['./src/components/footer/footer.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [NgStyle],
    template: `<div class="footer">
            <div class="progress-track">
            <div class="width-container clearfix">
                <a href="javascript:void(0)"
                    class="play-ico flaticon-pause52 fleft"
                    [ngClass]="taskService.startedTask.playing"></a>
                <div class="progress-wrapper fleft clearfix">

                    <div class="progress-bar-wrapper width-100per">
                        <div class="progress-bar-title">
                            <span>{{taskService.startedTask.taskText}}</span>
                        </div>
                        <div class="progress-bar-wrapper clearfix width-100per">
                            <div class="time-indicator fleft">{{taskService.startedTask.elapsedTimeInString}}</div>
                            <div class="time-indicator fright">{{taskService.startedTask.estimatedTimeInString}}</div>
                            <div class="progress-bar fleft">
                                <div class="progress-bar__progress fleft"
                                    [ngStyle]="taskService.startedTask.progressStyle"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`
})

export default class FooterComponent {
    constructor(public taskService:TaskService) {

    }
    ngOnChanges(){
        console.log("OnChanges");
        //(taskService.startedTask.get('elapsedTime')/taskService.startedTask.get('estimatedTime')
    }




}