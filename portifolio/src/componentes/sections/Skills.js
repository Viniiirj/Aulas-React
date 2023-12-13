import styles from './Skills.module.css'
import javascript from '../../image/js.svg'
import html from '../../image/html.svg'
import css from '../../image/css.svg'
import react from '../../image/react.svg'

function Skills(){
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            
            <div>
                <img src={javascript} alt='javascript'/>
                <img src={html} alt='html'/>
                <img src={css} alt='css'/>
                <img src={react} alt='react'/>

            </div>
        </div>
    )
}

export default Skills;