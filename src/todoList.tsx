import React from 'react';
import { Todo } from './model/todo';
import { Actions } from './model/actions';
import { List } from 'antd';

interface TodoListProps {
  values?: Todo[],
  onActions: (action: Actions) => (id: string) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { values, onActions } = props;
  const onComplete = (e: any) => {
    onActions(Actions.COMPLETE)(e.target.id);
  }
  const onDelete = (e: any) => {
    onActions(Actions.DELETE)(e.target.id);
  }

  return (
    <List itemLayout="horizontal" dataSource={values} renderItem={item => (
      <List.Item actions={[<a id={item.id} key="list-loadmore-complete" onClick={onComplete}>Complete</a>, <a id={item.id} key="list-loadmore-delete" onClick={onDelete}>Delete</a>]}>
        <div style={{ textDecoration: item.isComplete?"line-through" : "none" }}>{item.content}</div>
      </List.Item>
    )} />
  )
}