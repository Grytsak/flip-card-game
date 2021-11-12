import { createSlice } from '@reduxjs/toolkit';
import {  shuffledCasual, shuffledMedium, shuffledHard } from './data';


const initialState = {
    cardItems: '',
    casual: shuffledCasual,
    medium: shuffledMedium,
    hard: shuffledHard,
    difficulty: 'casual',
    cardFliped: false,
    cardFlipedType: '',
    cardFlipedId: ''
}

const checkDifficultyArray = (state) => {
    const pathname = window.location.pathname;
    const difficulty = pathname.substring(pathname.lastIndexOf('/') + 1);

    if (difficulty === "casual") {
        return state.casual;
    } else if (difficulty === "medium") {
        return state.medium;
    } else if (difficulty === "hard") {
        return state.hard;
    }
}

export const flipCardThunk = card => {
    return (dispatch, getState) => {
        let state = getState();

        if (state.cards.cardFliped) {
            dispatch(secondCardFlip(card));
            setTimeout(() => {
                dispatch(secondCardFlipCheck(card));
            }, 850)
            
        } else {
            dispatch(firstCardFlip(card));
        }
        
    }
}


const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        checkDifficulty: (state, action) => {
            state.difficulty = action.payload;
        },
        firstCardFlip: (state, action) => {
            let card = checkDifficultyArray(state).find(card => card.id === action.payload.id)
            console.log('card:', card);
            card.flip = true
            state.cardFliped = true
            state.cardFlipedType = card.type
            state.cardFlipedId = card.id
            return
        },
        secondCardFlip: (state, action) => {  
            let card = checkDifficultyArray(state).find(card => card.id === action.payload.id)
            card.flip = true

            if(card.type === state.cardFlipedType && card.id != state.cardFlipedId) {
                card.finished = true
                state.cardFliped = false
                state.cardFlipedType = ''
                state.cardFlipedId = ''

                checkDifficultyArray(state).map(firstCard => {
                    if(card.type === firstCard.type) {
                        firstCard.finished = true
                    }
                })
            }
        },
        secondCardFlipCheck: (state, action) => {
            let card = checkDifficultyArray(state).find(card => card.id === action.payload.id)

            if(card.type != state.cardFlipedType) {
                checkDifficultyArray(state).map(card => {
                    card.flip = false
                })
                state.cardFliped = false
                state.cardFlipedType = ''
                state.cardFlipedId = ''
            }
        }
    }
})

export const { 
    shuffleCasual, 
    firstCardFlip, 
    secondCardFlip, 
    secondCardFlipCheck,
    checkDifficulty 
} = cardsSlice.actions

export default cardsSlice.reducer;

export const selectCards = (state) => {
    const pathname = window.location.pathname;
    const difficulty = pathname.substring(pathname.lastIndexOf('/') + 1);

    if (difficulty === "casual") {
        return state.cards.casual;
    } else if (difficulty === "medium") {
        return state.cards.medium;
    } else if (difficulty === "hard") {
        return state.cards.hard;
    }
}