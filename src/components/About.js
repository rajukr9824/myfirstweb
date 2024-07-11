// import React, {useState} from 'react'

// export default function About(props) {
//     // const [myStyle, setmyStyle]= useState({
//     //     color:'black',
//     //     backgroundColor: 'white'
//     // })
//     let myStyle = {
//         color: props.mode === 'dark'?'white':'#042743',
//         backgroundColor: props.mode==='dark'?'#042743':'white',
//         border: '2px solid' ,
//         borderColor: props.mode==='dark'?'white':'#042743'
//     }
   
//   return (
//     <div className="container" style={myStyle}>
//     <h1 className="my-3">About Me</h1>
//       <div className="accordion" id="accordionExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingOne">
//       <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//       Introduction about me
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
         
//         My name is Raju Kumar. I am from Gaya, Bihar. I am learning technical skills like web development, and coding skills in java.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingTwo">
//       <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//       About my study
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
//          I am pursuing Bachelor of Technology(2022-26) at NIT Patna, with Computer Science and Engineering branch. Currently I am a 3rd year student.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingThree">
//       <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//       My achievement
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
//         <strong></strong> I have a great experience of leading a team as i have been a part of Navprayas event held in my village Manpur every year and i have lead a team for an event.
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }
