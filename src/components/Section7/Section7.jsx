import React,{useState} from 'react'
import "./Section7.css";
import AddIcon from '@mui/icons-material/Add';

export default function Section7() {

  const [questions,upQuestions] = useState(["What is Disney+?","How much does Disney+ cost?","What can I watch on Disney+?","Where can I watch Disney+?","What's included on the Disney+ plans with and without ads?","What is the Disney Bundle?"])

  return (
    <section className="section7">
        <p className='freque'>Frequently Asked Questions</p>
        {questions.map((val,i)=>{return <div key={i} className={`item${i}`} >{val} <AddIcon style={{fontSize:"40px"}} /></div>})}
    </section>
  )
}
