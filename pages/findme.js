import Layout from '../components/Layout'
import {RiLinkedinBoxFill, RiTwitterFill, RiFacebookBoxFill, RiInstagramLine} from 'react-icons/ri'
import { useRouter } from 'next/router'

export default function FindMe() {
    const router = useRouter();
    return <Layout page='Find me'>
        <RiLinkedinBoxFill style={{fontSize: '180px'}} onClick={()=>router.push('https://www.linkedin.com/in/katrinahortelano/')}/>
        <RiTwitterFill style={{fontSize: '180px'}} onClick={()=>router.push('https://twitter.com/Katrina61897237')}/>
        <RiFacebookBoxFill style={{fontSize: '180px'}} onClick={()=>router.push('https://www.facebook.com/katrina.hortelanoTWU')}/>
        <RiInstagramLine style={{fontSize: '180px'}} onClick={()=>router.push('https://www.instagram.com/katrinahortelano/')}/>
    </Layout>
}