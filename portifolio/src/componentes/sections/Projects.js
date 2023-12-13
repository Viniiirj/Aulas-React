import styles from './Projects.module.css'
import BottonB from '../elements/ButtonB'
import Card from '../elements/Card';
import cardapio from '../../image/cardapio.svg'
import onepiece from '../../image/onepiece.svg'
import timer from '../../image/timer.svg'

function Projects(){
    return (
        <div className={styles.projects} id="Projects">
           
            <h1>Projetos</h1>
            <Card image={cardapio} title='Cardapio Online' tech='html, css, javascript' description='Cardapio online com api de Whatsapp' site='https://viniiirj.github.io/ProjetoCardapio/' repo='https://github.com/Viniiirj/ProjetoCardapio'/>
            <Card image={onepiece} title='Landing Page One Piece' tech='html, css, javascript' description='Desenvolvimento de uma landing page com informações de alguns personagens do One Piece' site='https://viniiirj.github.io/Land-OnePiece/' repo='https://github.com/Viniiirj/Land-OnePiece'/>
            <Card image={timer} title='Focus Timer - Pomodoro' tech='html, css, javascript' description='Timer estilo pomodoro, com alguns ruidos brancos' site='https://viniiirj.github.io/FocusDesafio/' repo='https://github.com/Viniiirj/FocusDesafio'/>


            <BottonB text='Acesse meu repositório' link='https://github.com/Viniiirj?tab=repositories' />
        </div>
    )
}

export default Projects;