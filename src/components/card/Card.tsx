import styles from './card.module.css';
import {Dice} from "@/components/dice/Dice";
import Divider from '../../../public/pattern-divider-desktop.svg';
import DividerMobile from '../../../public/pattern-divider-mobile.svg';
import {useEffect, useState} from "react";
import {AdviceResponse} from "@/dto/AdviceResponse";
import Image from "next/image";

export function Card(): JSX.Element {
    const [advice, setAdvice] = useState<AdviceResponse>({id: 0, advice: ''});

    useEffect(() => {
        randomAdvice();
    }, []);

    const randomAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip);
            });
    };

    return (
        <div className={styles.card}>
            <div className={styles.id}>ADVICE #{advice.id}</div>
            <div className={styles.advice}>{`"${advice.advice}"`}</div>
            <Image src={Divider} alt={'divider'} className={styles.divider}/>
            <Image src={DividerMobile} alt={'divider_mobile'} className={styles.dividerMobile}/>
            <div className={styles.diceBtn}>
                <Dice onClick={randomAdvice}/>
            </div>
        </div>
    );
}
