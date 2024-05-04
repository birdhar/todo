import { useSelector } from "react-redux";
import style from "../styles/Todos.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useSelector((store) => store.todos);
  const [open, setOpen] = useState(false);

  return (
    <div className={style.todoscontainer}>
      <div className={style.todosbox}>
        <div className={style.btncontainer}>
          <h3 className={style.heading}>Todo List</h3>
          <button className={style.todobtn} onClick={() => setOpen(true)}>
            Create
          </button>
        </div>
        {todos?.length > 0 ? (
          <div className={style.todoslist}>
            {todos?.map((todo) => (
              <Todo key={todo?.id} todo={todo} />
            ))}
          </div>
        ) : (
          <div className={style.notask}>No task created</div>
        )}
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)} open={open} type="create" />
      )}
    </div>
  );
}

export default TodoList;
