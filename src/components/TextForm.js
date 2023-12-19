
import React, {useState} from 'react'



export default function TextForm(props) {

    const clickme=(event)=>{
        event.preventDefault();
        let newtext= text.toUpperCase();
        settext(newtext)
    }
    const handleonchange=(event)=>{
       
        settext(event.target.value);
    }

    const [text, settext] = useState();

  return (
<><form>
<div className="mb-3">
<h1>{props.heading}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text to analyze below</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3" onClick={clickme}>Convert to Uppercase</button>
  </div>
</form>
</>
  )
}
