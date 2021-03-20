import Layout from '../components/Layout'
import { connectToDatabase } from '../util/mongodb'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { data } from '../data/dummy'

export default function Home({ isConnected }) {
  const router = useRouter();

  return (
    <Layout page='Find a todo'>
    <div>
      <p>Cant find anything todo?</p>
      <button onClick={() => router.push('/create')}>Create</button>
    </div>

    <ul>
    {data.map((item ,i)=> {
       return <li key={i}>
       <Link href={`/todo`} as={`/todo?id=${item.id}`}>
       <a>
       <div>{item.title}</div>
          <div>{item.tasks.length} tasks</div>
          {item.tags.map((tag,i) => {
            return <span key={i}>#{tag}</span>
          })}
       </a>
          
        </Link>
       </li>
       
      })}
    </ul>
      
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
