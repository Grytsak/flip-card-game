import { createSlice } from '@reduxjs/toolkit';
import { shuffledCasual } from './data';

const initialState = {
    casual: shuffledCasual,
    cardFliped: false,
    cardFlipedType: '',
    cardFlipedId: ''
};

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
        firstCardFlip: (state, action) => {
            console.log('action.payload.id:', action.payload.id);
            let card = state.casual.find(card => card.id === action.payload.id)
            console.log('card 1:', card);
            card.flip = true
            state.cardFliped = true
            state.cardFlipedType = card.type
            state.cardFlipedId = card.id
            return
        },
        secondCardFlip: (state, action) => {  
            let card = state.casual.find(card => card.id === action.payload.id)
            card.flip = true

            if(card.type === state.cardFlipedType && card.id != state.cardFlipedId) {
                card.finished = true
                state.cardFliped = false
                state.cardFlipedType = ''
                state.cardFlipedId = ''

                state.casual.map(firstCard => {
                    if(card.type === firstCard.type) {
                        firstCard.finished = true
                    }
                })
            }
        },
        secondCardFlipCheck: (state, action) => {
            let card = state.casual.find(card => card.id === action.payload.id)

            if(card.type != state.cardFlipedType) {
                state.casual.map(cardCasual => {
                    cardCasual.flip = false
                })
                state.cardFliped = false
                state.cardFlipedType = ''
                state.cardFlipedId = ''
            }
        }
    }
})

export const { shuffleCasual, firstCardFlip, secondCardFlip, secondCardFlipCheck } = cardsSlice.actions

export default cardsSlice.reducer

export const selectCasualCards = (state) => state.cards.casual;