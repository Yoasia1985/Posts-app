import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.scss";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <Bio
          headshot="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/40790535_10212694670058757_1223783096281726976_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=eUeVnZmxNkAAX_BBlDW&_nc_ht=scontent-lcy1-1.xx&oh=b3986f3bea84d215de51eb48b5b25342&oe=615B59E4"
          name="Joanna Frackiewicz"
          tagline="Learning React by creating this project"
          role="UI UX Designer"
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
              date="26/08/2021"
            />
          </li>
          <li>
            <Post
              content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
              date="26/08/2021"
            />
          </li>
          <li>
            <Post
              content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
              date="26/08/2021"
            />
          </li>
        </ul>
        <PostForm>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </PostForm>
      </main>
    </div>
  );
}
