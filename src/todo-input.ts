/**
 * Created by yasergh on 4/4/16.
 */
import {Component} from "angular2/core";
import {TodoService} from "./todo-service";

@Component({
    selector:'todo-input',
    template:`<di>
                <input type="text" #myInput>
                <button (click)="onClick(myInput.value)">Click</button>
                </di>`
})

export class TodoInput{
    constructor(public todoservice:TodoService){}
    onClick(value){
        this.todoservice.todos.push(value);
        console.log(this.todoservice.todos);
    }
}
