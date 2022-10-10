import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png'
import { GridItem } from './components/GridItem'; {/* AQUI ESTÁ ARMAZENADO O GRID */}

import { levels, calculateImc, Level} from './Helpers/imc'; {/* AQUI ESTÃO ARMAZENADOS OS LEVELS EM FORMATO DE ARRAY E A FUNÇÃO DE CALCULO */}

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState< Level | null>(null); {/* O TOSHOW SÓ VAI APARECER QUANDO A FUNÇÃO TIVER SIDO INVOCADA */}

        {/* FUNÇÃO QUE RETORNA O IMC  COM O LEVEL E IMC JÁ, QUANDO TIVER TODOS OS DADOS NECESSÁRIOS ELE REALIZA A FUNÇÃO USANDO OS PARAMETROS HEIGHT E WEIGHT RETORNANDO O LEVEL; CASO FALTE ALGUM PARAMETRO ELE RETORNA O ALERTA */}

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert ('Informe todos os campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className="styles.main">
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      {/* Os dois lados da pagina */}

      <div className={styles.container}>
        <div className={styles.leftSide}>
         <h1>Calcule o seu IMC.</h1>
         <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

         <input 
          type="number" 
          value={heightField > 0 ? heightField : ' '}
          placeholder = 'Digite a sua altura. Ex: 1,5 (em metros).'
          onChange={e => setHeightField(parseFloat(e.target.value))} 
          disabled={toShow ? true : false}  
          />

          <input 
          type="number" 
          value={weightField > 0 ? weightField : ' '}
          placeholder = 'Digite seu peso. Ex 80,5 (em Kg).'
          onChange={e => setWeightField(parseFloat(e.target.value))} 
          disabled={toShow ? true : false}   
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calcular</button>
        </div>

            {/* QUANDO NÃO TIVER TOSHOW PARA MOSTRAR, ELE VAI MOSTRAR O GRID, 
            QUANDO TIVER ELE VAI MOSTRAR O OBJETO CORRETO E UM BOTÃO DE REINICIO */}
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => ( 
              <GridItem key={key} item={item} />
              ))}
            </div>
          }

          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="" width={25} />
            </div>
            <GridItem item={toShow} /> 
          </div>}
          </div>
        </div>
      </div>
  )
}

export default App
