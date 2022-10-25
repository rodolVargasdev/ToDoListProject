import React from "react";
import '../style-sheets/Task.css'
import { IoMdClose } from 'react-icons/io'

function Task({id, text, completed, finishTask, deleteTask})
{
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div 
                className='task-text'
                onClick={() => finishTask(id)}>
              {text}
            </div>

            <div className='task-delete-button'
                 onClick={()=> deleteTask(id)}>
                <IoMdClose className='task-icon'/>
            </div>
            
        </div>
    );
}

export default Task;