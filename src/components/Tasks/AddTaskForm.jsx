import React, { useState } from "react";
import axios from "axios";

import './AddTaskForm.scss';

const AddTaskForm = ({ listId, onAddTask }) => {
    const [addFormActive, setAddFormActive] = useState(false);
    const [inputValue, setinputValue] = useState(false);
    const [errorInputValue, setErrorInputValue] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const addNewTask = () => {
        setIsLoading(true);
        const obj = {
            listId: listId,
            text: inputValue,
            completed: false
        }
        axios
            .post('http://localhost:3001/tasks', obj)
            .then(({ data }) => {
                onAddTask(listId, obj);
                setAddFormActive(false);
            })
            .catch(() => {
                alert('Ошибка при добавлении задачи!');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="tasks__form">
            <div className="tasks__form-new">
                {!addFormActive &&
                    <button className="tasks__form-new-btn btn btn--secondary btn--icon" onClick={() => setAddFormActive(true)}>
                        <span className="btn-icon">
                            <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 8H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="btn-text">Новая задача</span>
                    </button>
                }
                {addFormActive && 
                    <div className="tasks__form-block">
                        <div className="field">
                            <div className="field__value">
                                <input 
                                    type="text" 
                                    placeholder="Текст задачи" 
                                    className="field__input"
                                    onChange={(e) => setinputValue(e.target.value)}
                                />
                            </div>
                            {errorInputValue && <span className="field__alert field__alert--required">Введите текст</span>}
                        </div>
                        <div className="btn-container-flex">
                            <button
                                onClick={() => {
                                    if (inputValue) {
                                        addNewTask(inputValue);
                                        setErrorInputValue(false);
                                    } else {
                                        setErrorInputValue(true);
                                    }
                                }}
                                className={`btn btn--primary ${isLoading ? 'btn--loading' : ''}`}>
                                {isLoading ? 'Добавление...' : 'Добавить задачу'}
                            </button>
                            {!isLoading &&
                                <button
                                    onClick={() => {
                                        setAddFormActive(false);
                                    }}
                                    className="btn btn--secondary">
                                    Отмена
                                </button>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default AddTaskForm;