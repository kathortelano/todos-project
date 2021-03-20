import { useState} from 'react';
import Layout from '../components/Layout'
import { RiArrowLeftLine} from 'react-icons/ri'


export default function Create() {
    const [step, setStep] = useState(1);

    return <Layout page='Create a todo'>
        {step === 2 ? <RiArrowLeftLine onClick={() => setStep(1)}/> : null}
        {step === 1 ? <div>
            form 1
            <button type='button' onClick={() => setStep(2)}>Continue</button>
        </div> : null}
        {step === 2 ? <div>
            form 2
            <div>
            <span>There will be no edit option once submitted. Beware!</span>
            <button  type='button' >Submit</button>
            </div>
           
        </div> : null}
    </Layout>
}