import { Component, OnInit} from '@angular/core';
import { delay } from 'rxjs';
import { TodoService, Todo } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodoService) { }

  public loading: boolean = true;

  public searchStr: string = ''

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .pipe(delay(500))
    .subscribe(() => {
      this.loading = false;
    })
  }
}
