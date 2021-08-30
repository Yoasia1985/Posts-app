import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Post from "../components/Post";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
     
      <main className={styles.main}>
        <h1 className={styles.title}>
         My Posts
        </h1>

        <ul className={styles.posts}>
            
          <li>
            <Post content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
              date="26/08/2021"/>
            </li>
          <li>
              <Post content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
              date="26/08/2021"/>
            </li>
          <li>
            <Post content='My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!'
              date='26/08/2021'/>
            </li>
          </ul>
        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
      </div>
  )
  }

