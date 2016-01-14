import {Component} from 'angular2/core';

@Component({
    selector: "right-panel",
    styleUrls: ['./src/components/right-panel/right-panel.css'],
    template: `<div class="right-fixed-panel">
        <div class="right-panel__actions fright">
            <a href="javascript:void(0)" class="flaticon-delete96"></a>
        </div>

        <h1 class="right-panel__heading">Design</h1>
        <div class="right-panel__content">
            <div class="right-panel-sub-section">
                <div class="accordion-head">
                    <h3 class="right-panel-sub-section__heading">Progress</h3>
                </div>
                <div class="accordion-cont">
                    <div class="progress-bar-wrapper clearfix width-100per">
                        <div class="time-indicator fleft">11:30:23</div>
                        <div class="time-indicator fright">11:30:23</div>
                        <div class="progress-bar fleft">
                            <div class="progress-bar__progress fleft" style="width:50%"></div>
                        </div>
                    </div>
                </div>

                <div class="accordion-cont">
                    <table class="right-panel__desc-table width-100per">
                        <tr>
                            <td>
                                <div>
                                    <span class="right-panel__desc-table__key bold-text">Due date:</span>
                                            <span class="right-panel__desc-table__value">
                                                6 April 16
                                            </span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span class="right-panel__desc-table__key bold-text">Estimate:</span>
                                            <span class="right-panel__desc-table__value">3 hrs</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="right-panel-sub-section">
                <div class="right-panel__tabs-wrapper">
                    <div class="right-panel__tabs-header">
                        <a class="right-panel__tabs-header__item active" href="javascript:void(0)">
                            Description
                        </a>
                        <a class="right-panel__tabs-header__item" href="javascript:void(0)">Activity</a>
                    </div>
                    <div class="right-panel__tabs-content">
                        <div class="right-panel__tabs-content__item">
                            <div class="right-panel__tabs-content__desc">
                                Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justent.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class RightPanelComponent extends Component{

}