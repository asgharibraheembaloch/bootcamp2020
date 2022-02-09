import React, {useState} from 'react';

function Room() {
    const [isLit, setLit] = useState(true);

    function changeRoomLight(){
        console.log("button clicked")
        setLit(!isLit)
    }

    return (
    <div>
        this room is {isLit? "light 🟨":"dark ⬛️"}
        <br/>
        <button onClick={changeRoomLight}>Toggle Button</button>
    </div>
    );
}

export default Room;
