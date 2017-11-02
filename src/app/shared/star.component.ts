import { Component, OnChanges, Input } from "@angular/core";

@Component({ 
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

    // ngOnChanges will only fire when we have an input. 
    // Hence, we have a @Input decorator for rating
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}