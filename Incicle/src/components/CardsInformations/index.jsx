import styles from './CardsInformations.module.css'
import poligono from '../../../assets/Polígono.png' 
import { useState } from 'react'

const CardsInformations = () => {

  const [listCard, setListCard] = useState([])

  fetch('../../../data.json')
    .then(response => response.json())
    .then( data  => setListCard(data))



  return (
    <div className={styles.container}>
      <div className={styles.gridCardItems}>
        <section className={styles.cardItemPrimary}>

          <div className={styles.header}>
            <h1>Endomarketing</h1>

            <div className={styles.buttons}>
              <div className={styles.buttonType}>TIPO <img src={poligono}/></div>
              <div className={styles.buttonCreate}>CRIAR <span>+</span></div>
            </div>
          </div>

          <ul className={styles.list}>
            <li className={styles.listCard}>

              <div className={styles.imageCard}>
                <img src='' alt="capa do card" />
                <div className={styles.informationCard}>

                  <h3>Geral dispensado para curtir o feriado</h3>
                  <div>
                    <span className={styles.event}>Comunicado</span>
                    <span className={styles.data}>13 de out</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas a repudiandae ab veritatis similique...</p>

                </div>
              </div>

              <span>...</span>

            </li>
          </ul>
        </section>

        <section className={styles.cardItemSecundary}>

          <div className={styles.cardEndomarketing}>
            <h2>Endomarketing</h2>
            <p>
              Endomarketing está relacionado às 
              ações de treinamento ou qualificação
              dos colaboradores da empresa
              visando um melhor serviço para o
              cliente. Marketing interno, devido ao
              nome, é usualmente confundido com
              Endomarketing mesmo sendo
              conceitos diferentes.
            </p>
            <button>DISPENSAR</button>
          </div>

          <div className={styles.cardManagement}>
            <h2>Quadros de Gestão à Vista</h2>

          </div>

        </section>
      </div>
    </div>
  )
}

export default CardsInformations