import { Component, OnInit, AfterViewInit, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'bullet-chart',
    templateUrl: './bullet.component.html',
    styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('bulletwrapper') container: any;
    @Input('colors') colors: any[];
    @Input('height') height: number; //pixels
    @Input('actual') actual: number[];
    @Input('target') target: number[];
    @Input('ranges') ranges: number[];

    calc_height: number = 0;
    actual_height: number = 0;
    actual_top: number = 0;

    calc_ranges: number[] = [];
    calc_actual: number[] = [];
    calc_target: number = 0;

    showTarget: boolean = false;
    showRange: boolean = false;

    range_col: any = '';
    target_col: any = '';
    actual_col: any = '';

    range_opacity: any[] = [];
    actual_opacity: any[] = [];
    viewInit: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        if (this.viewInit) {
            this.processData();
        }
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.viewInit = true;
        this.processData();
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

    }

    processData() {
        this.calculateHeights();
        let act_max: number = Number.MIN_VALUE;
        let range_max: number = Number.MIN_VALUE;
        let target_max: number = Number.MIN_VALUE;
        let max: number = Number.MIN_VALUE;
        let self = this;

        if (this.actual) {
            act_max = Math.max(...this.actual);
        }
        if (this.ranges) {
            range_max = Math.max(...this.ranges);
        }
        if (this.target) {
            target_max = Math.max(...this.target);
        }
        max = Math.max(act_max, range_max, target_max);

        if (this.target && this.target.length > 0) {
            this.calc_target = target_max / max * 100;
            this.showTarget = true;
        }

        if (this.actual && this.actual.length > 0) {
            this.actual.forEach((item) => {
                this.calc_actual.push((item / max) * 100)
            });
            this.calc_actual.sort((a, b)=>{return a-b});
            this.addActualOpacity();
        }

        if (this.ranges && this.ranges.length > 0) {
            this.ranges.forEach((item) => {
                this.calc_ranges.push((item / max) * 100)
            });
            this.calc_ranges.sort((a, b)=>{return a-b});
            this.addRangeOpacity();
            this.showRange = true;
        }

        debugger;
    }


    addRangeOpacity() {
        let num = this.calc_ranges.length;
        while (num > 0) {
            this.range_opacity.push(1 / num);
            num--;
        }
        this.range_opacity.reverse();

    }
    addActualOpacity() {
        let num = this.calc_actual.length;
        while (num > 0) {
            this.actual_opacity.push(1 / num);
            num--;
        }
        this.actual_opacity.reverse();
    }
    calculateHeights() {
        if (this.height) {
            this.calc_height = Math.round(this.height);
        }
        this.actual_height = this.calc_height / 2;
        this.actual_top = this.actual_height / 2;
    }

}
