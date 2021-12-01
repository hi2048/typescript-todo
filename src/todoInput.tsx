import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { Todo, guid } from './model/todo';


interface TodoInputProps {
  value?: string;
  onSubmit?: (value: Todo) => void;
}

function TodoInput(props: TodoInputProps) {
  const { value, onSubmit } = props;
  const ref = useRef<Input>(null);
  const todoSubmit = () => {
    onSubmit && onSubmit({ id: guid(), content: ref.current?.state.value });
  }

  return (
    <Form layout="inline" className="form" onFinish={todoSubmit}>
      <Form.Item name="todo">
        <Input placeholder="please input your todo" value={ value } ref={ref} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default TodoInput;