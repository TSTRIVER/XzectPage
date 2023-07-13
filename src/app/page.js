// import Image from 'next/image'
// import styles from './page.module.css';
import Main from './Main/Main';
import Cont from "./Services/Cont";
import Expertise from './Expertise/Expertise';
import Consult from './Consult/Consult';

export default function Home() {
  return (
    <>
     <Main/>
     <Cont/>
     <Expertise/>
     <Consult/>
    </>
  )
}
