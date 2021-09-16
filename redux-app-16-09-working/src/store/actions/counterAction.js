import { INCREMENT, DECREMENT } from './counterActionType';


export const incCounter = (count) => ({
        type: INCREMENT,
        payload: { count }
})

export const decCounter = () => {
    return {
        type: DECREMENT,
        // payload: { count }
    }
}


