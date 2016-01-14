import {Component} from 'angular2/core';

@Component({
    selector: 'footer',
    styleUrls: ['./src/components/footer/footer.css'],
    template: `<div class="footer">
            <div class="progress-track">
            <div class="width-container clearfix">
                <a href="javascript:void(0)" class="play-ico flaticon-play128 fleft"></a>
                <div class="progress-wrapper fleft clearfix">

                    <div class="progress-bar-wrapper width-100per">
                        <div class="progress-bar-title">
                            <span>Create and Upload Razorthink website repositories</span>
                        </div>
                        <div class="progress-bar-wrapper clearfix width-100per">
                            <div class="time-indicator fleft">11:30:23</div>
                            <div class="time-indicator fright">11:30:23</div>
                            <div class="progress-bar fleft">
                                <div class="progress-bar__progress fleft" style="width:30%"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`
})

export default class FooterComponent {
}