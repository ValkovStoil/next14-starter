import Image from "next/image"
import styles from "./about.module.css"


const AboutPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Aganecy</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, braver, and better.</h1>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, braver, and better. We
                    belive in good ideas, flexibility and precission. We`re the world`s Our
                    Special Team best consulting & finance solution provider. Wide range
                    of web and software development services.
                </p>
                <div className={styles.boxes}>
                <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img}/>
            </div>
        </div>
    )
}

export default AboutPage