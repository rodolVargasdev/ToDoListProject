import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/TaskList.css';
import Task from './Task.jsx';

function TaskList()
{
	const [tasks, setTask] = useState([]);

	const addTask = task =>
	{
		if(task.text.trim())
		{
			console.log('Antes: ' + tasks);
			task.text = task.text.trim();
			const updatedTask = [task, ...tasks];
			setTask(updatedTask);
		}
	}

	const deleteTask = id =>
	{
		const updatedTask = tasks.filter(task => task.id !== id);
		setTask(updatedTask);
	}


	const finishTask = id =>
	{
		const updatedTask = tasks.map(task =>
		{
			if(task.id === id)
			{
				task.completed = !task.completed;
			}
			return task;
		});

		setTask(updatedTask);
	}


	return (
		<>
		
			<TaskForm onSubmit={addTask} />
				<div className='task-list-container'>
					{
						tasks.map((task)=>
						<Task 
							key={task.id}
							id={task.id}
							text={task.text}
							completed={task.completed}
							finishTask={finishTask}
							deleteTask={deleteTask} />
						)
					}

				</div>
			</>
			
	);
}

export default TaskList;