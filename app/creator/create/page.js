"use client";

import { useState } from "react"
import back_styles from "../../styles/background.module.css"
import styles from "../../styles/create.module.css"
import Link from "next/link"
import Image from "next/image";

const Create = ({searchParams}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const movie_type = searchParams?.movie_type

    const [name,setName] = useState("")
    const [des,setDes] = useState("")
    const [file,setFile] = useState<File>(false);

    const handleCreate = async () =>{
        if(!name || !des){
            alert("You need to fill your film's data into the box first na🥺")
            return;
        }

        try{
            const movie_name = name;
            const movie_des = des;
            const movie_url = name;
            const res = await fetch(`${API_URL}/api/my_movie`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },body:JSON.stringify({movie_name,movie_des,movie_type,movie_url})
            });

            if(res.ok){
                location.href = "/creator"
            }else{
                throw new Error("failed to create film")
            }
        }
        catch(error){
            console.log(error)
        }
    }
  

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
                            <img className={styles.img_animated} src="/upload.png" width={25}/>
                            <Image className={styles.img_show} src="/rick_n_morty.jpg" width={260} height={320} id="profile-pic"/>
                            <form onSubmit={onSubmit}>
                                <input
                                    className={styles.img_input}type="file" accept="image/jpeg. image/png, image/jpg" onChange={(e)=>setFile(e.target.files?.[0])}
                                />
                                <input type="submit" value="Upload"/>
                            </form>
                        </div>
                    </div>
                    <div className={styles.editorMain}>
                        <div className={styles.editor}>
                            <div className={`${styles.form__group} ${styles.field}`}>
                                <input type="input" className={styles.form__field} placeholder="Name" required="" maxLength={18}
                                    onChange={(e)=>setName(e.target.value)}
                                    value={name}
                                />
                                <label for="name" className={styles.form__label}>Name Of Film🎈</label>
                            </div>
                        </div>
                        <div className={styles.editor}>
                            <div className={`${styles.form__group} ${styles.field}`}>
                                <input type="input" className={styles.form__field} placeholder="Name" required="" maxLength={30}
                                    onChange={(e)=>setDes(e.target.value)}
                                    value={des}/>
                                <label for="name" className={styles.form__label}>Description of Film🎈</label>
                            </div>
                        </div>
                        <h1 className={styles.texter}>
                            Type : {movie_type}
                        </h1>
                    </div>
                </div>
                <div className={styles.sumbitBorder}>

                <button className={styles.buttoner}>
                        <Link href="/creator">
                            <span className={styles.button_top}> Cancel❌ </span>
                        </Link>
                    </button>
                    
                    <button className={styles.buttoner} onClick={handleCreate}>
                        <span className={styles.button_top}> Create✅ </span>
                    </button>

                </div>

            </div>
        </div>
    </div>
  )

  
}

export default Create;