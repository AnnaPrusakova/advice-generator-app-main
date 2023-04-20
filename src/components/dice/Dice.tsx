import styles from './dice.module.css';
import Icon from '../../../public/icon-dice.svg';
import Image from "next/image";

export function Dice(): JSX.Element {
    return (
        <div className={styles.diceWrapper}>
            <div className={styles.dice}/>
            <Image src={Icon} alt="dice" className={styles.icon}/>
        </div>
    );
}
