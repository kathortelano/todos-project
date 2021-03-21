import { useCallback, useState } from 'react';
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form';
import { RiArrowLeftLine, RiCheckLine, RiCheckboxBlankLine} from 'react-icons/ri'

export default function Create() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({title: '', tasks: []});
   
    const {handleSubmit, register, reset} = useForm();

    const onSubmit1 = ({title}) => {
        setData(prev => {
            prev.title = title
            return prev
        })

        setStep(2)
    }

    const onSubmit2 = ({task}) => {
        setData(prev => {
            prev.tasks = [...prev.tasks, {task, completed: false}]
            return prev
        })

        reset('task');
    }

    const commit = () => {
        console.log(data)
    }

    return <Layout page='Create a todo'>
        {step === 2 ? <RiArrowLeftLine onClick={() => setStep(1)}/> : null}
        {step === 1 ? <div>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <input name='title' ref={register} defaultValue={data.title}/>
                <button type='submit'>Continue</button>
            </form>
            
        </div> : null}
        {step === 2 ? <div>
            <form onSubmit={handleSubmit(onSubmit2)}>
            <input name='task' ref={register}/>

            <button  type='submit' >Add</button>
            
            </form>
            {
                data.tasks.length > 0 && (<div>{data.tasks.map(({task, completed}, i) => {
                    return <li key={i}>{completed ? <RiCheckLine/> : <RiCheckboxBlankLine/>} {task}</li>
                       
                       
                  
                })}</div>)
            }

            
            <div>
            <span>There will be no edit option once submitted. Beware!</span>
            <button type='button' onClick={commit}>Submit</button>
            </div>
           
        </div> : null}
    </Layout>
}

