import  React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import { checkDifficulty, selectCards, flipCardThunk } from './cardsSlice'

import styles from '../../scss/features/cards/Cards.module.scss'

let classNamesBind = classNames.bind(styles);

export const Cards = () => {
    const dispatch = useDispatch();

    const pathname = window.location.pathname;
    const difficulty = pathname.substring(pathname.lastIndexOf('/') + 1);
    dispatch(checkDifficulty(difficulty));


    const cards = useSelector(selectCards);
    

    const flipCard = card => {
        if(card.flip) {
            return
        }

        dispatch(flipCardThunk(card));
    };

    const renderCards = cards.map(card => {
        const cardClassNames = classNamesBind({
            card: true,
            [difficulty]: true,
            card___active: card.flip,
            card___finished: card.finished
        })

        return(
            <div className={cardClassNames} key={card.id} id={card.id} onClick={() => flipCard(card)}>
                <div className={styles.card__inner} id={`inner-${card.id}`}>
                    <div className={styles.card__back}></div>
                    <div className={styles.card__front}>
                        <FontAwesomeIcon icon={[card.iconType, card.icon]} className={styles.card__icon} />
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className={styles.cards}>
            {renderCards}
        </div>
    )
}