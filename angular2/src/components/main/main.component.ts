import {Component} from 'angular2/core';

@Component({
    selector: 'main',
    styleUrls: ['./src/components/main/main.css'],
    template: `<div>
         <div class="main-body width-container">
            <div class="task-list clearfix">
                <div class="task-list__item fleft">
                    <div class="task-header-wrapper">
                        <h2 class="task-header align-center">Design<span class="task-no"> (12)</span></h2>
                    </div>
                    <div class="task-body">
                        <ul class="task-body-list">
                            <li class="task-body-list__item clearfix">
                                <label class="task-body-list__item__label fleft">
                                    <input type="checkbox">
                                    <span class="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" class="play-ico fright"></a>
                                <span class="task-time-left fright display-none">1:15:00</span>
                            </li>
                            <li class="task-body-list__item clearfix">
                                <label class="task-body-list__item__label fleft">
                                    <input type="checkbox">
                                    <span class="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                                <span class="task-time-left fright">1:15:00</span>
                            </li>
                            <li class="task-body-list__item clearfix">
                                <label class="task-body-list__item__label fleft">
                                    <input type="checkbox">
                                    <span class="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                                <span class="task-time-left fright">1:15:00</span>
                            </li>
                            <li class="task-body-list__item clearfix">
                                <label class="task-body-list__item__label fleft">
                                    <input type="checkbox">
                                    <span class="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                                <span class="task-time-left fright">1:15:00</span>
                            </li>
                        </ul>
                    </div>
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