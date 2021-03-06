export interface Todo {
    status: TodoStatus;
    _id: string;
    title: string;
    description: string;
}

export enum TodoStatus {
    OPEN = 'open',
    DONE = 'done'
}