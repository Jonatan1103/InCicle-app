import styles from './CardsInformations.module.css'

import poligono from '../../../assets/Polígono.png' 
import elipse from '../../../assets/Elipse.png'
import mundo from '../../../assets/mundo.png'

import { data } from '../../data.json'
import managementData from '../DataManagement/DataManagement'

const CardsInformations = () => {
  const endomarketingData = [...data]
  const managementDataList = managementData[0].boards

  console.log(managementDataList[0].resume_files)

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
            {
              endomarketingData.map( items => (
                <li key={items.id} className={styles.listCard}>

                  <div className={styles.imageCard}>
                    <img src={items.file.url} alt="capa do card" />
                    <div className={styles.informationCard}>

                      <h3>{items.title}</h3>
                      <div>
                        <span className={styles.event}>{items.type}</span>
                        <span className={styles.data}>{items.info.date}</span>
                      </div>

                      <p>{items.description}</p>

                    </div>
                  </div>

                  <span className={styles.infoItem}>
                    <img src={elipse} />
                    <img src={elipse} />
                    <img src={elipse} />
                  </span>

                </li>
              ))
            }
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
            <button className={styles.btnEndomarketing}>DISPENSAR</button>
          </div>

          <div className={styles.cardManagement}>
            <h2>Quadros de Gestão à Vista</h2>
            <ul>

              {
                managementDataList.map((item, index) => (
                  <li key={index} className={styles.statement}>
                    <div className={styles.containerStatement}>
                      <h4 className={styles.title}>{item.title}</h4>

                      <div className={styles.infoStatement}>

                        <div className={styles.world}>
                          <img src={mundo} alt="imagem mundo" />
                        </div>

                        <div className={styles.info}>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardsInformationsImg}>
                      <img src={item.resume_files[0].file} alt="" />
                      <img src={item.resume_files[1].file} alt="" />
                      <img src={item.resume_files[2].file} alt=""/>
                      <img src={item.resume_files[3].file} alt="" />
                    </div>
                  </li>
                ))
              }

            </ul>
          </div>

        </section>
      </div>
    </div>
  )
}

export default CardsInformations