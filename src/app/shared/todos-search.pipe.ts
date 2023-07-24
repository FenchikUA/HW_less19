import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todos.service";

@Pipe({
  name: 'todosSearch'
})

export class TodosSearchPipe implements PipeTransform{
  transform(todos: Todo[], search: string = ''): Todo[] {
    if(!search.trim()) {
      return todos
    }
    return todos.filter(todo => {
      return todo.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())!== -1
    })
  }
}