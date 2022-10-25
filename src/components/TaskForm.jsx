import React, { useState } from "react";
import '../style-sheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props)
{

	const [input, setInput] = useState('');

	const changeManage = e => {
		setInput(e.target.value)
	}


	const deliveryManage = e => {
		e.preventDefault();

		const newTarea = { 

			id: uuidv4(),
			text: input,
			completed: false
		}

		props.onSubmit(newTarea);

	}

	return(
		<form 
			className='task-form'
			onSubmit={deliveryManage}>
			<input 
				className='task-form-input'
				type='text' 
				placeholder='Enter a task...'
				name='text' 
				autoComplete='off'
				onChange={changeManage}
			/>
			<button 
				className='task-form-button'>
				Add
			</button>
		</form>
	);
}

export default TaskForm;
