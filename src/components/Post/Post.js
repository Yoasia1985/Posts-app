import { FaHeart , FaShareAlt } from 'react-icons/fa';
import styles from "./Post.module.scss"




const Post = ({ content, date }) => {
    return (
        <>
            <p className={styles.postsContent}>
                { content }
            </p>
            <ul className={styles.postsMeta} >
                <li className={styles.postsMetaData}>
                <FaHeart /> 34
                </li>
                <li className={styles.postsMetaData}>
               <FaShareAlt />  Share
                </li>
                <li className={styles.postsMetaData}>
                { date }
                </li>
            </ul>
        </>
    )
}

export default Post;

// import styles from './Post.module.scss';
// import { FaHeart , FaShareAlt } from 'react-icons/fa';

// const Post = ({ content, date }) => {
//     return (
//             <>
//             <p className={styles.postsContent}>
//                 { content }
//             </p>
//             <p className={styles.postsDate}>
//                 { date }
//             </p>
//         </>
//     )
// }

// export default Post;
