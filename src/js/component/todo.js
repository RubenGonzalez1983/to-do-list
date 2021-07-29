import React from "react";

export function ToDo() {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	return (
		<div className="bigdiv">
			<h1 className="header">Here is a very basic todo list</h1>
			<input
				className="input"
				type="text"
				value={task}
				onChange={event => {
					setTask(event.target.value);
				}}
				onKeyPress={event => {
					if (event.key === "Enter") {
						const newTodos = todos.concat([task]);
						setTodos(newTodos);
						setTask("");
					}
				}}
			/>

			<ul className="ul">
				{todos.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button
								className="button"
								onClick={() => {
									const newerTodos = todos.filter((e, i) => {
										return i !== index;
									});
									setTodos(newerTodos);
								}}>
								Done!
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
