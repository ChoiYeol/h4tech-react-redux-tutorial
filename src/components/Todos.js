import React from 'react';

const TodoItem =({todo, onToggle, onRemove})=>{
  return (
      <div>
        <input type="checkbox" />
        <span>예제테스트</span>
        <button>delete</button>
      </div>
  )
}

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) =>{
  const onSubmit = e=>{
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
        <div>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </form>
    </div>
  );
};

export default Todos;
