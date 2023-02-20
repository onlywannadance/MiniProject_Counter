const initialState = {counter: 0};

const reducer = (state = initialState, action) => {                  // принимает state и действие которое будет выполняться над state - action (обычно это объект, у которого есть одно обязательное поле type: 'example')
    switch (action.type) {
        case "INC":
            return {
                ...state,                 // разворачиваем стейт
                counter: state.counter + 1   // меняем поле counter у стейта
            }
        case "DEC":
            return {
                ...state,                 // разворачиваем стейт
                counter: state.counter - 1   // меняем поле counter у стейта
            }
        case "RND":
            return {
                ...state,                 // разворачиваем стейт
                counter: state.counter * action.payload   // меняем поле counter у стейта
            }
        default:
            return state;
    }
}

export default reducer;