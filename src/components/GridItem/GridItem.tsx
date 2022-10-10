import { Level } from "../../Helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level


};


/*O GRIDITEM FOI FORMADO PELO MAIN COMO PARTE MAIOR, O GRID ITEM TEM DISPLAY GRID '''APP.MODULE.CSS'''


*/
export const GridItem = ( {item}: Props) => {
        return (
        <div className={styles.main} style ={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt='' width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}> Seu IMC é de {item.yourImc} Kg/m2.</div>
                }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>.
                </>
            </div>

        </div>
    )
}