import React, {useState} from 'react';
import { TodoForm } from './TodoForm';

export const TodoWrapper = () => {
    return (
        <div className='TodoWrapper'>
            <TodoForm/>
        </div>
    )
}