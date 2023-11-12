import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("clicked");
        let upText = Text.toUpperCase();
        setText(upText);
    }
    const handleOnChange = (event)=>{
        console.log("changed");
        setText(event.target.value);
    }
    const[Text, setText] = useState('Enter text here');
    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    </>
  )
}
