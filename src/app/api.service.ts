import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment.prod';
import { Todo } from "./todo.model";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private readonly baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) {

    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.baseUrl, todo);
    }

    getTodos() {
        return this.http.get<Todo[]>(this.baseUrl);
    }

    deleteTodo(id: string): Observable<Todo> {
        return this.http.delete<Todo>(`${this.baseUrl}/${id}`);
    }

    updateTodo(id: string, changes: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.baseUrl}/${id}`, changes);
    }
}
