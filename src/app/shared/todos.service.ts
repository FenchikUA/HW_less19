import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {tap} from "rxjs/operators";

export interface Todo {
  id: number,
  name: string,
  capital: string,
  population: number,
  flag: string

}

@Injectable({ providedIn: 'root' })

export class TodoService {
  public todos: Todo[] = []

  constructor(public http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://restcountries.com/v2/all')
    .pipe(tap(todos => this.todos = todos))
  }
}