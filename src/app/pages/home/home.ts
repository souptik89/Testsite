import { Component } from '@angular/core';
import { ViewChild, Input, IterableDiffers, IterableDiffer, DoCheck } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']

})

export class HomeComponent {
    @ViewChild('owlElement') owlElement: OwlCarousel;
    items: any;

    constructor() {
        this.items = [{
            name: 'john',
            occupation: 'online marketer',
            details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
            mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
            suscipit, posuere a, pede.`,
        },
        {
            name: 'john2',
            occupation: 'online marketer',
            details: 'lorem ipsum lorem ipsum'
        },
        {
            name: 'john3',
            occupation: 'online marketer',
            details: 'lorem ipsum lorem ipsum'
        }
        ];
        this.fun();
    }
    fun() {
        //  this.owlElement.next([200]);
        //duration 200ms
    }
    refresh() {
        this.trigger('refresh.owl.carousel');
    }

    next(options?: any[]) {
        this.trigger('next.owl.carousel', options);
    }

    previous(options?: any[]) {
        this.trigger('prev.owl.carousel', options);
    }

    to(options?: any[]) {
        this.trigger('to.owl.carousel', options);
    }

    trigger(action: string, options?: any[]) {
        this.owlElement.trigger(action, options);
    }

}