import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Home: NextPage = () => {
  const [storeList,setStoreList]=useState<object[]>([{}]);
  useEffect(()=>{
      const getStores=():void=>{ axios.get("http://localhost:9000/stores")
      .then((res)=>{
        // console.log(res.data)
        setStoreList([...storeList,res.data])
      })
      .catch(error=>{
        console.log(error);
      })
    getStores
    }  
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