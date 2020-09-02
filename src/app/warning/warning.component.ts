import {Component} from '@angular/core';

@Component(
    {
        selector:'app-warning',
        template:'<p>Warning!</p>',
        styles: [
`
p {
    background-color: lightpink;
    border: 1px red solid;
}
`
        ]
        
    }
)
export class WarningComponent{

}