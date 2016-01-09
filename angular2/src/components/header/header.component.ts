import {Component} from 'angular2/core';

@Component({
    selector: 'header',
    styleUrls: ['./src/components/header/header.css'],
    template: `<div class="header-wrapper">
            <div class="header">
                <div class="width-container clearfix">
                    <h1 class="fleft logo-text">KAT Task Manager</h1>
                    <div class="user-details-wrapper fright">
                        <span class="user-detail__text">Welcome, <span class="bold-text">Sandeep</span></span>
                    </div>
                    <div class="header-search-wrapper fright">
                        <input type="text" class="header-search__input" placeholder="Search"/>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div class="width-container">

                </div>
            </div>
        </div>`
})

export default class HeaderComponent {
}