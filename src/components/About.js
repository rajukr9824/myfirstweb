import React, {useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle]= useState({
        color:'black',
        backgroundColor: 'white'
    })
    const [btntext, setbtntext]=useState("Enable Dark Mode")
   const toggleStyle = ()=>{
    if(myStyle.color==='white'){
        setmyStyle({
            color:'black',
            backgroundColor: 'white'
        })
        setbtntext("Enable Dark Mode")
    }
    else{
        setmyStyle({
            color:'white',
            backgroundColor: 'black'
        })
        setbtntext("Enable Light Mode")
    }
   }
  return (
    <div className="container" style={myStyle}>
    <h1 className="my-3">About Me</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Introduction about me
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         
        My name is Raju Kumar. I am from Gaya, Bihar. I am learning technical skills like web development, and coding skills in java.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      About my study
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         I am pursuing Bachelor of Technology(2022-26) at NIT Patna, with Computer Science and Engineering branch. Currently I am a 3rd year student.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      My achievement
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong></strong> I have a great experience of leading a team as i have been a part of Navprayas event held in my village Manpur every year and i have lead a team for an event.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
  </div>
    </div>
  )
}
