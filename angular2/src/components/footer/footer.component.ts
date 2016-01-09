import {Component} from 'angular2/core';

@Component({
    selector: 'footer',
    styleUrls: ['./src/components/footer/footer.css'],
    template: `<div class="footer">
            <div class="progress-track">
                <div class="width-container clearfix">
                    <a href="javascript:void(0)" class="play-ico fleft"></a>
                    <div class="progress-wrapper fleft clearfix">

                        <div class="time-indicator fleft">11:30:23</div>
                        <div class="progress-bar-wrapper fleft">
                            <div class="progress-bar-title">
                                <span>Create and Upload Razorthink website repositories</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-bar__progress" style="width:30%"></div>
                            </div>
                        </div>
                        <div class="time-indicator fright">11:30:23</div>

                    </div>
                </div>
            </div>
            <div class="daytime-track">
                <div class="width-container clearfix">
                    <h2 class="fleft daytime-label fleft">Today</h2>
                    <div class="progress-bar-wrapper fleft clearfix">
                        <div class="progress-bar fleft clearfix">
                            <div class="progress-bar__progress fleft" style="width:30%"></div>
                        </div>
                        <div class="time-indicator fright">4h 30m</div>
                    </div>
                </div>
            </div>
    </div>`
})

export default class FooterComponent {
}