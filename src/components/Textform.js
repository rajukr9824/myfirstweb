import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick=()=>{
      //console.log("Lowercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
  }
    const handleOnChange=(event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
      
      setText("");
      props.showAlert("Text Cleared!", "success");
  }
  const handleCopy=()=>{
    //console.log("I am a copy");
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success")
  }
    const [text, setText] = useState('');
   // text="new text" //wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div class="mb-3" >
  <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'} } id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
 <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
   <h2>Text summary</h2>
   <p>{text.split(" ").length} words {text.length} characters</p>
   <p>{0.008 * text.split(" ").length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter text above to preview"}</p>
 </div>
 </>
  )
}
