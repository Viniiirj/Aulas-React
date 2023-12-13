import styles from './Card.module.css'

import BottonB from '../elements/ButtonB'


function Card({image, title, tech, description, repo, site}){
    return (
        <div className={styles.card}>
            <a href={site}><img src={image} alt='imagem'/></a>

            <div>
                <h3>{title}</h3>
                <p>{tech}</p>
                <p>{description}</p>
                <BottonB text='Acesse o repositório' link={repo}/>
            </div>
        </div>
    )
}

export default Card