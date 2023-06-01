export default function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "login":
            return { ...state, user: { name: action.payload } };
        case "numberMult7":
            return { ...state, number: state.number * 7 };
        case "Int":
            return { ...state, number: parseInt(state.number) };
        case "numberDiv25":
            return { ...state, number: state.number / 25 };
        case "numberAddN":
            return { ...state, number: state.number + action.payload };
        case "clear":
            return { ...state, number: 0, user: { name: "Sem usuário" } };
        default:
            return state;
    }
}