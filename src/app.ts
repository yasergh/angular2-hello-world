
import {bootstrap} from "angular2/bootstrap";
import {Component} from "angular2/core";
import {TodoInput} from "./todo-input";
import {TodoService} from "./todo-service";

@Component({
  selector:"app",
  directives:[TodoInput],
  template:`<div><todo-input></todo-input></div>`
})
class App{}
bootstrap(App,[TodoService])
  .catch(err => console.error(err));
