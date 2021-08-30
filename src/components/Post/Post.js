import { FaHeart , FaShareAlt } from 'react-icons/fa';

const Post = ({ content, date }) => {
    return (
        <>
            <p>
                { content }
            </p>
            <p>
                { date }
            </p>
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
