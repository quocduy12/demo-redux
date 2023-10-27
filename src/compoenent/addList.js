import { useDispatch } from 'react-redux';
import { add } from '../reducers/task';
import { useRef } from 'react';

function AddList() {
    const taskName = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <>
            <div className="form-add-task">
                <label>Tên công việc:</label>
                <input type="text" placeholder="Nhập tên công việc" ref={taskName} />
                <button onClick={addTask}>Thêm</button>
            </div>
        </>
    );
}

export default AddList;
