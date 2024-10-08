import styles from "./styles/blankspace.module.css"

const blankspace = ({animated}) => {

    if(animated == "false"){
        return (
            <div className={styles.blankspace_line}>
                 <div className={styles.littlebox}>
                    
                </div>
            </div>
        )
    }else if(animated=="balls"){
        return (
    
            <div className={styles.blankspace}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                <div className={styles.shadow}></div></div>
            </div>
          );
    }else if(animated=="justspace"){
        return (
    
            <div className={styles.justspace}>
                <h1>📝Your Creativity💌</h1>
            </div>
          );
    }else if(animated=="warning"){
        return (
    
            <div className={styles.justwarn}>
                <h1>🔰This is A Public Database. Everything you post, everyone can see it🙈</h1>
            </div>
          );
    }
    else{
        return(
            <div className={styles.blankspace_pacman}>
                <div className={styles.pacman}></div>
                <h1>Made By Master Deesampan😎🥨</h1>
            </div>
        )
    }
};

export default blankspace;
