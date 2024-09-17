"use client";

import React, { useState, useEffect } from "react";
import back_styles from "../../styles/background.module.css";
import styles from "../../styles/create.module.css";
import Link from "next/link";
import Image from "next/image";

const Edit = ({ searchParams }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const movie_type_search = searchParams?.movie_type;
    const card_id = searchParams?.card_id

    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null); // For storing the image preview
    const [fileName, setFileName] = useState(""); // For storing the image preview
    const [imger,setImger] = useState("")

    let api_movie_type = ""
    if(movie_type_search == "Movie"){
        api_movie_type = "my_movie"
    }else if(movie_type_search == "Series"){
        api_movie_type = "my_serie"
    }else if(movie_type_search == "Cartoon"){
        api_movie_type = "my_cartoon"
    }

    const onSubmit = async () => {
        if (!file) return;

        try {
            const data = new FormData();
            data.set('file', file);

            const res = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                body: data
            });

            if (!res.ok) {
                const errorMessage = await res.text();
                throw new Error(`Failed to upload: ${errorMessage}`);
            }

            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getFilm = async () =>{
        try{
          const res = await fetch(`${API_URL}/api/${api_movie_type}/${card_id}`);
          if(!res.ok){
            throw new Error("Failed to fetch cartoon")
          }
          return res.json();
        }catch(error){
          console.log("Error on fetching data: ",error);
        }
    }
    const init_info =async()=>{
        if(movie_type_search=="Movie"){
            const {my_movie} = await getFilm();
            setName(my_movie.movie_name)
            setDes(my_movie.movie_des)
            setImger(`/uploads/${my_movie.movie_url}`)
        }else if(movie_type_search=="Series"){
            const {my_serie} = await getFilm(); 
            setName(my_serie.movie_name)
            setDes(my_serie.movie_des)
            console.log(my_serie.movie_url)
            setImger(`/uploads/${my_serie.movie_url}`)
        }else{
            const {my_cartoon} = await getFilm();
            setName(my_cartoon.movie_name)
            setDes(my_cartoon.movie_des)
            setImger(`/uploads/${my_cartoon.movie_url}`)
        }
    }

    console.log(imger)

    // Trigger the upload automatically when the file is selected
    useEffect(() => {
        if (file) {
            onSubmit();
        }
    }, [file]);

    // Generate preview when file is selected
    useEffect(() => {
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            // Cleanup the object URL to avoid memory leaks
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [file]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile); // Set the selected file and trigger the useEffect
    
            // Get the file name
            console.log(selectedFile.name);
            // You can also store the file name in state if needed
            setFileName(selectedFile.name);
        }
    };
    

    const handleCreate = async () => {
        if (!name || !des || !file) {
            alert("You need to fill your film's data into the box first na🥺");
            return;
        }

        try {
            const newName = name;
            const newDes = des;
            const newUrl = fileName;

            let movie_type = api_movie_type
            console.log("this is movie type : ", movie_type)
            const res = await fetch(`${API_URL}/api/${api_movie_type}/${card_id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newName, newDes, newUrl, movie_type:api_movie_type})
            });

            if (res.ok) {
                location.href = "/creator";
            } else {
                throw new Error("failed to create film");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={back_styles.all_black_style} onLoad={init_info}>
            <div className={styles.container}>
                <div className={styles.border}>
                    <div className={styles.header}>
                        <h1 className={styles.texterer}>🥓Creator's Page🎨</h1>
                    </div>

                    <div className={styles.editor_border}>
                        <div className={styles.imgMainBorder}>
                            <div className={styles.imgBorder}>
                                <h1 className={styles.texter}>Upload your movie's image</h1>
                                <img className={styles.img_animated} src="/upload.png" width={25} />
                                
                                {/* Display dynamic image preview */}
                                {preview ? (
                                    <Image className={styles.img_show} src={preview} width={260} height={320} id="profile-pic" alt="Image Preview" />
                                ) : (
                                    <Image className={styles.img_show_lock} src="" width={260} height={320} id="profile-pic" alt="Default Image" />
                                )}

                                {/* for upload image */}
                                <form className={styles.former}>
                                    <input
                                        className={styles.img_input}
                                        type="file"
                                        accept="image/jpeg, image/png, image/jpg"
                                        onChange={handleFileChange} // Trigger upload when file is selected
                                    />
                                </form>

                                {/* \\\\\\\\\\\\\\ */}
                            </div>
                        </div>
                        <div className={styles.editorMain}>
                            <div className={styles.editor}>
                                <div className={`${styles.form__group} ${styles.field}`}>
                                    <input
                                        type="input"
                                        className={styles.form__field}
                                        placeholder="Name"
                                        required=""
                                        maxLength={18}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                    <label htmlFor="name" className={styles.form__label}>
                                        Name Of Film🎈
                                    </label>
                                </div>
                            </div>
                            <div className={styles.editor}>
                                <div className={`${styles.form__group} ${styles.field}`}>
                                    <input
                                        type="input"
                                        className={styles.form__field}
                                        placeholder="Description"
                                        required=""
                                        maxLength={30}
                                        onChange={(e) => setDes(e.target.value)}
                                        value={des}
                                    />
                                    <label htmlFor="description" className={styles.form__label}>
                                        Description of Film🎈
                                    </label>
                                </div>
                            </div>
                            <h1 className={styles.texter}>Type : {movie_type_search}</h1>
                        </div>
                    </div>
                    <div className={styles.sumbitBorder}>
                        <button className={styles.buttoner}>
                            <Link href="/creator">
                                <span className={styles.button_top}>Cancel❌</span>
                            </Link>
                        </button>

                        <button className={styles.buttoner} onClick={handleCreate}>
                            <span className={styles.button_top}>Edit✅</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
