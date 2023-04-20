import styles from './dice.module.css';
import Icon from '../../../public/icon-dice.svg';
import Image from "next/image";
import {IDice} from "@/components/dice/dice.interfaces";

export function Dice({onClick}: IDice): JSX.Element {
    return (
        <div className={styles.diceWrapper} onClick={onClick}>
            <div className={styles.dice}/>
            <Image src={Icon} alt="dice" className={styles.icon}/>
        </div>
    );
}
