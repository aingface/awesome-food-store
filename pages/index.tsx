import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import ModalCard from '../components/ModalCard'
import React,{useEffect,useState} from 'react';
import axios from 'axios'


interface Store{
  id:number,
  name:string,
  description:string,
  thumb:string,
  url:string,
}
//더미 storeList 변수에 들어갈 더미 값
const dummyStore:Store={
  id:-(Number.MAX_SAFE_INTEGER),
  name:'dummy-name',
  description:'dummy-description',
  thumb:'dummy-thumb-url',  
  url:'dummy-url'
}

const Home: NextPage = () => {
  const [storeList,setStoreList]=useState<Store[]>([dummyStore]);
  useEffect(()=>{
      const getStores=()=>{ 
      axios.get("http://localhost:9000/stores")
        .then((res)=>{
          setStoreList(res.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    getStores();  
  },[])
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>AOWESOME FOODSTORE</title>
      </Head>
      <Header/>
      <Body currentPageName={"Eat"} storeList={storeList}/>
      <ModalCard></ModalCard>
      <Footer/>  
    </>
  )
}

export default Home