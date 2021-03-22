import Layout from '../components/Layout'
import { RiHeart3Fill, RiShareForwardLine, RiUserLine } from 'react-icons/ri'
import { getAllTodos } from '../data/QueryController'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home({ data }) {
  const router = useRouter();

  return (
    <Layout page='Find a todo'>
    <div>
      <p>Cant find anything todo?</p>
      <button onClick={() => router.push('/create')}>Create</button>
    </div>

    <ul>
    {data.map((item)=> {
       return <li key={item._id}>
       <Link href={`/${item._id}`} >
       <a>
       <div>{item.title}</div>
       </a>
        </Link>
          <div>{item.tasks.length} tasks</div>
          {item.tags.map((tag,i) => {
            return <span key={i}>#{tag}</span>
          })}
          <div>
           <span><RiHeart3Fill/> {item.likes}</span> 
           <span><RiShareForwardLine/> {item.shares}</span>
           <span><RiUserLine/> {item.used}</span> 
          </div>
          
       
       </li>
       
      })}
    </ul>
      
    </Layout>
  )
}

export async function getServerSideProps(context) {
  
  const data = await getAllTodos();

  return {
    props: { data: JSON.parse(data) },
  }
}
