import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    casual: [
        { id: 1, type: 'a', iconType: 'fas', icon: 'anchor', flip: false, finished: false },
        { id: 2, type: 'a', iconType: 'fas', icon: 'anchor', flip: false, finished: false },
        { id: 3, type: 'b', iconType: 'fab', icon: 'angellist', flip: false, finished: false },
        { id: 4, type: 'b', iconType: 'fab', icon: 'angellist', flip: false, finished: false },
        { id: 5, type: 'c', iconType: 'fas', icon: 'apple-alt', flip: false, finished: false },
        { id: 6, type: 'c', iconType: 'fas', icon: 'apple-alt', flip: false, finished: false },
        { id: 7, type: 'd', iconType: 'fas', icon: 'angry', flip: false, finished: false },
        { id: 8, type: 'd', iconType: 'fas', icon: 'angry', flip: false, finished: false },
        { id: 9, type: 'e', iconType: 'fas', icon: 'atom', flip: false, finished: false },
        { id: 10, type: 'e', iconType: 'fas', icon: 'atom', flip: false, finished: false },
        { id: 11, type: 'f', iconType: 'fas', icon: 'atlas', flip: false, finished: false },
        { id: 12, type: 'f', iconType: 'fas', icon: 'atlas', flip: false, finished: false },
        { id: 13, type: 'g', iconType: 'fas', icon: 'award', flip: false, finished: false },
        { id: 14, type: 'g', iconType: 'fas', icon: 'award', flip: false, finished: false },
        { id: 15, type: 'h', iconType: 'fas', icon: 'balance-scale', flip: false, finished: false },
        { id: 16, type: 'h', iconType: 'fas', icon: 'balance-scale', flip: false, finished: false },
    ],
    cardFliped: false,
    cardFlipedType: '',
    cardFlipedId: ''
};

export const flipCardThunk = card => {
    return (dispatch, getState) => {
        dispatch(cardFlip(card));
        const stateAfter = getState();
    }
}


const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardFlip: (state, action) => {
            let card = state.casual.find(card => card.id === action.payload.id);

            if(!state.cardFliped) {
                card.flip = true
                state.cardFliped = true
                state.cardFlipedType = card.type
                state.cardFlipedId = card.id
                return
            } else { 
                if(card.type === state.cardFlipedType && card.id != state.cardFlipedId) {
                    card.flip = true
                    card.finished = true
                    state.cardFliped = false
                    state.cardFlipedType = ''

                    state.casual.map(cardFinish => {
                        if(card.type === cardFinish.type) {
                            cardFinish.finished = true
                        }
                    })
                } else {
                    state.casual.map(card => {
                        card.flip = false
                    })
                }
            }
            return
        }
    }
})

export const { cardFlip } = cardsSlice.actions

export default cardsSlice.reducer

export const selectCasualCards = (state) => state.cards.casual;