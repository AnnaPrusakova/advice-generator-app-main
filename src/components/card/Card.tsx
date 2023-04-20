import styles from './card.module.css';
import {Dice} from "@/components/dice/Dice";

export function Card(): JSX.Element {
    return <div className={styles.card}><Dice/></div>
}
