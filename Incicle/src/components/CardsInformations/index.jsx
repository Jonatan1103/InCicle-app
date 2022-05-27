import styles from './CardsInformations.module.css'

const CardsInformations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridCardItems}>
        <section className={styles.cardItem}>

          <div className={styles.header}>
            <h1>Endomarketing</h1>

            <div>
              <button>TIPO \/</button>
              <button>CRIAR</button>
            </div>
          </div>

          <ul className={styles.list}>
            <li>

            </li>
          </ul>
        </section>

        <section className={styles.cardItemSecundary}>
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
        </section>
      </div>
    </div>
  )
}

export default CardsInformations