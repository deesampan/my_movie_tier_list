import styles from "./styles/blankspace.module.css"

const blankspace = ({animated}) => {

    if(animated == "false"){
        return (
            <div className={styles.blankspace_line}>
                 <div className={styles.littlebox}>
                    
                </div>
            </div>
        )
    }else{
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
    }
};

export default blankspace;
