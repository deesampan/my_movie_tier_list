import back_styles from "../../styles/background.module.css"
import styles from "../../styles/create.module.css"
import Link from "next/link"

const Create = async (req,res) => {
  

  return(
    <div className={back_styles.all_black_style}>
        <div className={styles.container}>
            <div className={styles.border}>
                <div className={styles.header}>
                    <h1 className={styles.texterer}>🥓Creator's Page🎨</h1>
                </div>

                <div className={styles.editor_border}>
                    <div className={styles.imgMainBorder}>
                        <div className={styles.imgBorder}>
                            <h1 className={styles.texter}>Upload your movie's image</h1>
                            <img src="/upload.png" width={25}/>
                        </div>
                    </div>
                    <div className={styles.editorMain}>
                        <div className={styles.editor}>
                            <div className={`${styles.form__group} ${styles.field}`}>
                                <input type="input" className={styles.form__field} placeholder="Name" required="" />
                                <label for="name" className={styles.form__label}>Name Of Film🎈</label>
                            </div>
                        </div>
                        <div className={styles.editor}>
                            <div className={`${styles.form__group} ${styles.field}`}>
                                <input type="input" className={styles.form__field} placeholder="Name" required="" />
                                <label for="name" className={styles.form__label}>Description of Film🎈</label>
                            </div>
                        </div>
                        <h1 className={styles.texter}>
                            Type : Cartoon
                        </h1>
                    </div>
                </div>
                <div className={styles.sumbitBorder}>

                <button className={styles.buttoner}>
                        <Link href="/creator">
                            <span className={styles.button_top}> Cancel❌ </span>
                        </Link>
                    </button>
                    
                    <button className={styles.buttoner}>
                        <Link href="/creator">
                            <span className={styles.button_top}> Create✅ </span>
                        </Link>
                    </button>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Create;