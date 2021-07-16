import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import { selectCasualCards, flipCardThunk } from './cardsSlice'

import styles from '../../scss/features/cards/Cards.module.scss'

let classNamesBind = classNames.bind(styles);

export const Cards = () => {
    const casual = useSelector(selectCasualCards);
    const dispatch = useDispatch();

    const flipCard = card => {
        if(card.flip) {
            return
        }

        dispatch(flipCardThunk(card));
    }

    const renderCards = casual.map(card => {
        const cardClassNames = classNamesBind({
            card: true,
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