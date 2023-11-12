import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("clicked");
        let upText = Text.toUpperCase();
        setText(upText);
        setStyle("pink");
    }
    const handleLowClick = ()=>{
        // console.log("clicked");
        let upText = Text.toLowerCase();
        setText(upText);
        setStyle("blue");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleColor = () =>{
        setStyle("red");
    }

    const [Color, setStyle] = useState("");
    const[Text, setText] = useState('');
    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="form-group container">
            <textarea className="form-control" value={Text} style={{color : Color}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleColor}>Change Color</button>    

    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes Required To Read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </>
  )
}
