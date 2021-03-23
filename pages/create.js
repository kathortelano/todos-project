import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form';
import { RiArrowLeftLine, RiCheckLine, RiCheckboxBlankLine} from 'react-icons/ri'

export default function Create() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({title: '', tags: [], tasks: []});
   
    const {handleSubmit, register, reset, watch} = useForm();
    const tags = watch('tags') || '';
    const [tagsList, setTagsList] = useState([])
    
    const onSubmit1 = ({title}) => {
        setData(prev => {
            prev.title = title
            prev.tags = tagsList
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

    const separateTags = (string) => {
        const trigger = /\,|\s/g;
        const array = string.split(trigger).filter(tag => {
           return tag !== ''
        });

        setTagsList(array);
    }

   
    const commit = () => {
        console.log(data)
    }

    useEffect(() => {
        separateTags(tags)
    },[tags])

    return <Layout page='Create a todo'>
        {step === 2 ? <RiArrowLeftLine onClick={() => setStep(1)}/> : null}
        {step === 1 ? <div>
            <form onSubmit={handleSubmit(onSubmit1)}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <input name='title' ref={register} defaultValue={data.title}/>
                <label style={{border: '1px solid black', position: 'relative', minHeight: '30px', maxWidth: '153px', width: '100%'}}>
                <input name='tags' ref={register} style={{opacity: 1, position: 'absolute', minHeight: '30px', maxWidth: '153px', width: '100%'}} defaultValue={data.tags.join()}/>
                <ul style={{
                    width: 'inherit',
                    display: 'flex',
                    flexFlow: 'row wrap',
                    margin: 'unset',
                    listStyle:' none',
                    padding: 'unset'}}>
                {tagsList.map((tag, i)=>{
                    return <li key={i} style={{border: '1px solid black', marginRight: '5px'}}>#{tag}</li>
                })}
                </ul>
                </label>
            </div>
                
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

