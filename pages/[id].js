import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { RiCheckLine, RiCheckboxBlankLine, RiHeart3Fill, RiShareForwardLine} from 'react-icons/ri'
import { getAllTodoIds, getTodo } from '../data/QueryController'
import { data } from '../data/dummy'
import { useState } from 'react'

export default function Todo({data}) {
    const {title, tasks, tags, likes, shares} = data

    return <Layout page='Complete the todo'>
       <div>
           <h1>{title}</h1>
           <div>
           {tags.map((tag,i) => {
               return <span key={i}>#{tag}</span>
           })}
           </div>
           <div>
           <span><RiHeart3Fill/> {likes}</span> 
           <span><RiShareForwardLine/> {shares}</span>
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

export async function getStaticPaths() {
    const ids = await getAllTodoIds();

    const paths = ids.map(id => {
        return {
            params: {
                id
            }
        }
    })

    return {
        paths, 
        fallback: false
    }

}

export async function getStaticProps({params}) {
    const {id} = params
    const data = await getTodo({id});

    return {
        props: {
            data: JSON.parse(data)
        }
    }
}


