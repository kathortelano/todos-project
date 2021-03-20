import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { RiCheckLine, RiCheckboxBlankLine} from 'react-icons/ri'
import { data } from '../data/dummy'
import { useState } from 'react'

export default function Create() {
    const router = useRouter();

    const getData = () => {
        
    const todoId = Number(router.asPath.split('').pop());
 
    const todoData = data.filter(item => item.id === todoId)[0];
    
    return todoData
    }

    const {title, tags, tasks} = getData();

    return <Layout page='Complete the todo'>
       <div>
           <h1>{title}</h1>
           <div>
           {tags.map((tag,i) => {
               return <span key={i}>#{tag}</span>
           })}
           </div>
          
           <div>
               {tasks.map((task,i) => {
                   return <div key={i}>
                   <span>{task.completed ? <RiCheckLine/> : <RiCheckboxBlankLine/>}</span>
                       {task.todo};
                       
                   </div>
               })}
           </div>
       </div>
    </Layout>
}
