const patientReducer = (state: PatientStates, action: PatientActions) => {
    switch (action.type) {
        case 'FULLN': {
            return { ...state, fullname: action.payload }
        }
        case 'SEX': {
            return { ...state, sex: action.payload }
        }
        case 'AGE': {
            return { ...state, age: action.payload }
        }
        case 'ADDR': {
            return { ...state, address: action.payload }
        }
        case 'PHN': {
            return { ...state, phone_no: action.payload }
        }
        case 'CARD_NO': {
            return { ...state, card_no: action.payload }
        }
        case 'CARDNO': {
            return { ...state, cardNo: action.payload }
        }
        case 'DEATH_D': {
            return { ...state, deathDate: action.payload }
        }
        case 'DEAD': {
            return { ...state, dead: action.payload }
        }
        case 'DATE': {
            return { ...state, date: action.payload }
        }
        case 'RESET': {
            return {
                sex: '', date: '', age: '', dead: '', cardNo: '', card_no: '',
                address: '', fullname: '', phone_no: '', deathDate: '',
            }
        }
    
        default: {
            return state
        }
    }
}

export default patientReducer