import { useState } from 'react';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


const TodoApp = () => {
    const [ListItems, setListItems] = useState([]);
    const [currentItem, setCurrentItem] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        if (currentItem.trim() !== '') {
            setListItems([...ListItems, { text: currentItem }]);
            setCurrentItem('');
        }
    };

    const removeItem = (index) => {
        const newList = [...ListItems];
        newList.splice(index, 1);
        setListItems(newList);
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center p-5 ">
                    <h1>Todo List App</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a task"
                            value={currentItem}
                            onChange={(e) => setCurrentItem(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={addItem}>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    {ListItems.length > 0 ? (
                        <ul className="list-group">
                            {ListItems.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{item.text}</span>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeItem(index)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center bg-success-subtle ">No items</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;