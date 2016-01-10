import {Component} from 'angular2/core';
import {TaskListComponent} from './task/components/task.list.component';

@Component({
    selector: 'main',
    styleUrls: ['./src/components/main/main.css'],
    directives: [TaskListComponent],
    template: `<div>
         <div class="main-body width-container">
            <div class="task-list clearfix">
                <div class="task-list__item fleft">
                    <div class="task-header-wrapper">
                        <h2 class="task-header align-center">Design<span class="task-no"> (12)</span></h2>
                    </div>

                        <task-list></task-list>

                    <div class="task-footer">
                        <a href="javascript:void(0)" class="primary-link add-task-link">+ Add Task</a>
                    </div>
                </div>

                <div class="task-list__item add-board fleft">
                    <a href="javascript:void(0)" class="primary-link">+ Add Board</a>
                </div>

            </div>
        </div>
    </div>`
})

export default class MainComponent {
}