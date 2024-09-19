import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/28201415/pexels-photo-28201415/free-photo-of-owl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/28201415/pexels-photo-28201415/free-photo-of-owl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={50} height={50} className={styles.avatar}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Autor</span>
                        <span className={styles.detailValue}>Stoil Valkov</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis quia, tempora ex laboriosam facere maiores, nisi, ducimus reiciendis quas fugit nemo officiis temporibus laudantium. Quod veniam commodi debitis corrupti.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;