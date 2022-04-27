import React from "react";

import './Tasks.scss';

const Tasks = () => {
    return (
        <div className="tasks">
            <div className="tasks__header">
                <h2 className="tasks__title">Фронтенд</h2>
                <div className="tasks__edit"></div>
            </div>
            <div className="tasks__body">
                <ul className="tasks__items">
                    <li className="tasks__items-item">
                        <div className="checkbox">
                            <label className="checkbox__label">
                                <input type="checkbox" className="checkbox__value" />
                                <div className="checkbox__content">
                                    <div className="checkbox__input"></div>
                                    <div className="checkbox__text">ReactJS Hooks (useState, useReducer, useEffect и т.д.)</div>
                                </div>
                            </label>
                        </div>
                        <div className="tasks__items-item-remove">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"/>
                            </svg>
                        </div>
                    </li>
                    <li className="tasks__items-item">
                        <div className="checkbox">
                            <label className="checkbox__label">
                                <input type="checkbox" className="checkbox__value" />
                                <div className="checkbox__content">
                                    <div className="checkbox__input"></div>
                                    <div className="checkbox__text">Redux (redux-observable, redux-saga)</div>
                                </div>
                            </label>
                        </div>
                        <div className="tasks__items-item-remove">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"/>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="tasks__footer">

            </div>
        </div>
    );
};

export default Tasks;