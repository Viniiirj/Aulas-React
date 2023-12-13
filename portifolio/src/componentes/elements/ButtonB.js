import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default ButtonB