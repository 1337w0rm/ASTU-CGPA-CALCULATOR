import  React from 'react'
import { useState } from 'react'
import Form from './Form'
import '../styles/Home.css'
import Notification from './Notification'

const Home = () => {
    const [message, setMessage] = useState(null)
    const [modal, setModal] = useState(true)

    const creditsCSE = [18,20,21,22,22,22,20,18];
    const calculate = (e) => {
        e.preventDefault();
        let semMarks = 0;
        let totalCredit = 0;
        let target = e.target;
        let formData = {};
    
        for (let i = 0; i < target.length; i++) {
            if(target.elements[i].value !== ""){
                formData[target.elements[i].getAttribute("name")] = target.elements[i].value;
                semMarks += target.elements[i].value * creditsCSE[i];
                totalCredit += creditsCSE[i];
            }
        }
        let cgpa = (semMarks/totalCredit);
        cgpa = Math.round(cgpa * 100) / 100

        setModal(true)
        setMessage(`Your CGPA is ${cgpa}`)
    }

    return (
        <div>
            <form className="form" onSubmit={calculate}>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's calculate your CGPA!</div>
                <Form />
            </form>
            {(message !== null) ? <Notification modal={modal} setModal={setModal} message={message}/> : null}
        </div>
    )
}

export default Home
