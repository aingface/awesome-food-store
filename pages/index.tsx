import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import ModalCard from '../components/ModalCard'
import React,{useEffect,useState} from 'react';
import axios from 'axios'


export interface Store{
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
  thumb:'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480',  
  url:'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987'
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
      <Footer/>  
    </>
  )
}

export default Home