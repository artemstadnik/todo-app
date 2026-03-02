import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  onDelete: (id: number) => void;
  processingIds: number[];
  onUpdate: (todo: Todo) => Promise<void>;
  onToggle: (id: number) => void;
};

export const TodoList: React.FC<Props> = React.memo(
  ({ todos, tempTodo, onDelete, processingIds, onUpdate, onToggle }) => {
    return (
      <section className="todoapp__main" data-cy="TodoList">
        <TransitionGroup>
          {todos.map(todo => (
            <CSSTransition key={todo.id} timeout={300} classNames="item">
              <TodoItem
                todo={todo}
                onDeleteTodo={onDelete}
                loading={processingIds.includes(todo.id)}
                onUpdateTodo={onUpdate}
                onToggleTodo={onToggle}
              />
            </CSSTransition>
          ))}

          {tempTodo && (
            <CSSTransition key={0} timeout={300} classNames="temp-item">
              <TodoItem todo={tempTodo} loading />
            </CSSTransition>
          )}
        </TransitionGroup>
      </section>
    );
  },
);

TodoList.displayName = 'TodoList';
