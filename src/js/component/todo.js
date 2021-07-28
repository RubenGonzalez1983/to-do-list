import React from "react";

export function ToDo() {
	const [todos, setTodos] = React.useState([
		"task one",
		"task two",
		"task three"
	]);
	const [task, setTask] = React.useState("");
	const toDosLi = todos.map((item, index) => {
		return <li key={index}>{item}</li>;
	});

	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={event => {
					setTask(event.target.value);
				}}
			/>

			<ul>{toDosLi} </ul>
		</div>
	);
}
