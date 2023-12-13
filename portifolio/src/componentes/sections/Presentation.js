import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';

function Presetation(){
    return(
        <div className={styles.presentation} id="Presentation" >
            <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou Vinicius Ramos!</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br></br>
             Estou sempre em busca de novos desafios para superar.</p>

             <ButtonA text="Conecte-se comigo!" link='https://www.linkedin.com/in/viniiirj/'/>
        </div>
    )
}

export default Presetation;