import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if(!res.ok){
//         throw Error("Something went wrong");
//     }

//     return res.json()
// }

const SinglePostPage = async ({params}) => {

    const {slug} = params;
    // FETCH DATA WITH AN API
    //const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);

    return(
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img}/>
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/28201415/pexels-photo-28201415/free-photo-of-owl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={50} height={50} className={styles.avatar}/>
                    {post && (<Suspense fallback = {<div>Loading....</div>}>
                        <PostUser userId = {post.userId}/>
                    </Suspense>)}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;