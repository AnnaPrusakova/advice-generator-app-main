import styles from './dice.module.css';
import Icon from '../../../public/icon-dice.svg';
import Image from "next/image";

export function Dice({onClick}): JSX.Element {
    return (
        <div className={styles.diceWrapper} onClick={onClick}>
            <div className={styles.dice}/>
            <Image src={Icon} alt="dice" className={styles.icon}/>
        </div>
    );
}
