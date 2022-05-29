import styles from './CardsInformations.module.css'
import poligono from '../../../assets/Polígono.png' 

const CardsInformations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridCardItems}>
        <section className={styles.cardItemPrimary}>

          <div className={styles.header}>
            <h1>Endomarketing</h1>

            <div className={styles.buttons}>
              <div className={styles.buttonType}>TIPO <img src={poligono}/></div>
              <div className={styles.buttonCrate}>CRIAR <span>+</span></div>
            </div>
          </div>

          <ul className={styles.list}>
            <li>

            </li>
          </ul>
        </section>

        <section className={styles.cardItemSecundary}>

          <div className={styles.cardEndomarketing}>
            <h2>Endomarketing</h2>
            <p>Endomarketing está relacionado às 
              ações de treinamento ou qualificação
              dos colaboradores da empresa
              visando um melhor serviço para o
              cliente. Marketing interno, devido ao
              nome, é usualmente confundido com
              Endomarketing mesmo sendo
              conceitos diferentes.</p>
            <button>DISPENSAR</button>
          </div>

        </section>
      </div>
    </div>
  )
}

export default CardsInformations