import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupClick = () =>{
    console.log("uppercase was clicked " + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercase","success")
  }
  const handlelovClick = () =>{
    console.log("lovercase was clicked " + text)
    let lovercase = text.toLowerCase();
    setText(lovercase)
    props.showAlert("convert to lovercase","success")
  }

  const handleclearClick =() =>{
    let newtext = " ";
    setText(newtext)
    props.showAlert("convert to clear all case","success")
  }

  const handleextraspaceClick = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("clear the extra space","success")
  }
  
  const handlecopyClick = () =>{
    console.log("i am copy");
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy the all text","success")
  }

  const handlerevClick = () =>{
    let newtext = "";
    let split = text.split(" ")
    for (let i = split.length - 1; i >= 0; i--) {
      newtext += split[i]  + " ";
    }
    setText(newtext)
    props.showAlert("reverse all text","success")
  }

  const handleonchange = (event) =>{
    console.log("uppercase was onchange")
    setText(event.target.value)
  }
  const [text, setText] = useState('enter text here 2');
  // text = "new text";    //wrong way to change text;
  // setText = "new text";   //correct way to chage text;
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
  <textarea type="textarea" value={text} className="form-control" style={{backgroundColor : props.mode === 'dark'? 'black':'white', color : props.mode === 'dark'? 'white':'black'}} onChange={handleonchange} id="mybox" rows={8}/>
</div>
<button className="btn btn-primary m-2" onClick={handleupClick}>convert to uppercase</button>
<button className="btn btn-danger m-2" onClick={handlelovClick}>convert to lovercase</button>
<button className="btn btn-secondary m-2" onClick={handleclearClick}>convert to clear case</button>
<button className="btn btn-success m-2" onClick={handlerevClick}>convert to revese</button>
<button className="btn btn-dark m-2" onClick={handlecopyClick}>copy text</button>
<button className="btn btn-dark m-2" onClick={handleextraspaceClick}>remove extra spaces</button>


    </div>
    <div className="container my-3"  style={{color : props.mode === 'dark'? 'white':'black'}}>
      <h1>your text summery</h1>
      <p>{text.split(" ").length} 3455 ,words {text.length}</p>
      <p>{0.008 * text.split(" ").length} minuts read</p>
      <h2>preview</h2>
      <p>{text.length<0? "Enter something in the texbox above to priview it here" : text}</p>
    </div>
    </>
  )
}
