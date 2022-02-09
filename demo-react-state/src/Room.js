import React, {useState} from 'react';
import './Room.css'

function Room() {
    const [isLit, setLit] = useState(true);

    function changeRoomLight(){
        setLit(!isLit)
    }

    return (
    <div className={`room ${isLit? "lit":"dark"}`}>
        this room is {isLit? "light ☀️":"dark 🌙"}
        <br/>
        <button onClick={changeRoomLight}>Toggle Button</button>
    </div>
    );
}

export default Room;
