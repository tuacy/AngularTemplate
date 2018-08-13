import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h3>
            直接求值: {{1 + 1}}
        </h3>

        <h3>
            属性表达式: {{getTotal()}}
        </h3>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = 100;
    price = 10;

    getTotal(): number{
        return this.count * this.price;
    }
}
