import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useRef, useState } from "react";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../redux/selectors";

export default function TodoList() {
    const dispatch = useDispatch();
    const target = useRef(null);
    const todoList = useSelector(todosRemainingSelector);
    const [todoName, setTodoName] = useState();
    const [todoPriority, setTodoPriority] = useState("Medium");

    const handleAddButtonClick = () => {
        dispatch(
            addTodo({
                id: uuidv4,
                name: todoName,
                priority: todoPriority,
                completed: false,
            })
        );
        setTodoName("");
        setTodoPriority("Medium");
        target.current.focus();
    };
    return (
        <Row style={{ height: "calc(100% - 40px)", overflowY: "hidden" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        value={todoName}
                        ref={target}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                    <Select
                        defaultValue={todoPriority}
                        value={todoPriority}
                        onChange={(e) => setTodoPriority(e)}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button
                        type="primary"
                        onClick={() => handleAddButtonClick()}
                    >
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
