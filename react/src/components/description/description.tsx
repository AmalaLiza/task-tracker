import * as React from "react";
import './description.scss';

export default class Description extends React.Component<any, any> {

    render(){
<<<<<<< HEAD
        console.log(this.props.task.toJS());
         return <div className="right-fixed-panel" style={{display:"none"}}>
             <h1 className="right-panel__heading">{this.props.task.get('title')}</h1>
=======
         return <div className="right-fixed-panel">
             <div className="right-panel__actions fright">
                 <a href="javascript:void(0)" className="flaticon-star178"></a>
                 <a href="javascript:void(0)" className="flaticon-delete96"></a>
             </div>

             <h1 className="right-panel__heading">Create designs for insight screen</h1>
>>>>>>> 92e2ad27fdab250f7f623f5b3f9413d9c84b8250
             <div className="right-panel__content">
                 <div className="right-panel-sub-section">
                     <div className="accordion-head">
                         <h3 className="right-panel-sub-section__heading">Progress</h3>
                         <span className="arrow-ico"></span>
                     </div>
                     <div className="accordion-cont">
                         <div className="clearfix progress-time-indicator">
                             <span className="fleft">TODAY: 9:15 AM</span>
                             <span className="fright">TODAY: 10:15 PM</span>
                         </div>
                         <div className="progress-bar-wrapper">
                             <div className="progress-bar">
                                 <div className="progress-bar__progress" data-width={"30%"} style={{width:"30%"}}></div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="right-panel-sub-section">
                     <div className="accordion-head">
                         <h3 className="right-panel-sub-section__heading">Progress</h3>
                         <span className="arrow-ico"></span>
                     </div>
                     <div className="accordion-cont">
                         <table className="right-panel__desc-table width-100per">
                             <tr>
                                 <td>
                                     <div>
                                         <span className="right-panel__desc-table__key bold-text">Priority:</span>
                                         <span className="right-panel__desc-table__value">7</span>
                                     </div>
                                 </td>
                                 <td>
                                     <div>
                                         <span className="right-panel__desc-table__key bold-text">Due date:</span>
                                         <span className="right-panel__desc-table__value">12-June-16</span>
                                     </div>
                                 </td>
                                 <td>
                                     <div>
                                         <span className="right-panel__desc-table__key bold-text">Estimate:</span>
                                         <span className="right-panel__desc-table__value">{this.props.task.get('estimatedTime')}</span>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div>
                                         <span className="right-panel__desc-table__key bold-text">Created:</span>
                                         <span className="right-panel__desc-table__value">5 hours Ago</span>
                                     </div>
                                 </td>
                                 <td></td>
                                 <td></td>
                             </tr>
                         </table>
                     </div>
                 </div>
                 <div className="right-panel-sub-section">
                     <div className="right-panel__tabs-wrapper">
                         <div className="right-panel__tabs-header">
                             <a className="right-panel__tabs-header__item active" href="javascript:void(0)">Description</a>
                             <a className="right-panel__tabs-header__item" href="javascript:void(0)">Dependencies</a>
                             <a className="right-panel__tabs-header__item" href="javascript:void(0)">Notes</a>
                             <a className="right-panel__tabs-header__item" href="javascript:void(0)">Activity</a>
                         </div>
                         <div className="right-panel__tabs-content">
                             <div className="right-panel__tabs-content__item">
                                 <div className="right-panel__tabs-content__desc">Lorem ipsum dolor sit amet, vel feugiat, non vel cras. Lectus magna mattis lectus aliquam est, dictum sed sapien, morbi fusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justo maecenas magna donec, turpis amet curabitur bibendum. Maecenas eget mauris phasellus nibh, integer orci, varius ipsum velit praesent.</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    }
};
