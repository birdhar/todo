import { Dialog } from "@mui/material";
import style from "../styles/Todos.module.css";
import { useEffect, useState } from "react";
import { create, update } from "../utils/todos-slice";
import { useDispatch } from "react-redux";

function Modal({ open, onClose, type, edittodo }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    content: "",
    completed: false,
  });

  useEffect(() => {
    setTodo(edittodo);
  }, [edittodo]);

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const handleCreate = () => {
    dispatch(create(todo));
    onClose();
  };
  // dispatched create action with todo state as payload
  const handleEdit = () => {
    dispatch(update(todo));
    onClose();
  };
  // dispatched update action with new todo as payload

  return (
    <Dialog sx={{ borderRadius: "12px" }} open={open}>
      <div className={style.modal}>
        <div className={style.title}>
          <h5>{type === "create" ? "Create" : "Edit"} Todo</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={style.icon}
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className={style.modalcontent}>
          <textarea
            value={todo?.content}
            placeholder="Enter Something"
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          />

          <div className={style.modalfooter}>
            <div className={style.checkbox}>
              <p className={style.label}>Completed</p>
              <input
                type="checkbox"
                checked={edittodo && edittodo?.completed}
                onChange={(e) =>
                  setTodo({ ...todo, completed: e.target.checked })
                }
              />
            </div>
            <button
              disabled={todo?.content === ""}
              className={`${style.todobtn} ${style.addbtn}`}
              onClick={type === "create" ? handleCreate : handleEdit}
            >
              {type === "create" ? "Create" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
