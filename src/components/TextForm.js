import React ,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = () =>{
        console.log("upperCase was clicked","success");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleonChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared the text","success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
        props.showAlert("Rearranged the text","success");

    }

    const handleCopy = ()=>{
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied the text to clipBoard","success");
    }

    

  return (

    <>
        <div className='conatiner' style={{color: props.mode=='dark' ? 'white' : '#042743'} }>
            <h1>{props.heading}</h1>
            <div className="mb-3">    
                
                <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor: props.mode=='dark' ? 'grey' : 'white',color: props.mode=='dark'?'white':'#042743'} }  rows="8"></textarea>
                <br/>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Covert to UpperCase</button>
                <button className='btn btn-primary mx-2'  onClick={handleLoClick}>Covert to LowerCase</button>
                <button className='btn btn-primary mx-2'  onClick={handleClearClick}>ClearText</button>
                <button className='btn btn-primary mx-2'  onClick={handleCopy}>CopyText</button>
                <button className='btn btn-primary mx-2'  onClick={handleExtraSpaces}>RemoveSpace</button>
            </div>
        </div>

        <div className="container mb-3" style={{color: props.mode=='dark' ? 'white' : '#042743'} } >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} charecters</p>
            <p>{0.008*text.split(" ").length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textBox to preview it here"}</p>
        </div>
    </>
  )
}
