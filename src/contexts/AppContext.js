import { useReducer, createContext } from 'react';

const appContext = createContext();

const initialState = {
    userInfo: {
        isLoggedIn: false,
        username: '',
        password: ''
    }
};

let tempState;
const reducer = (state, action) => {
    switch (action.type) {
        case 'register':
            tempState = {...state};
            tempState.userInfo.username = action.payload.username;
            tempState.userInfo.password = action.payload.password;

            console.log('register', tempState);

            return tempState;
        case 'login':
            tempState = {...state};
            tempState.userInfo.isLoggedIn = true;

            console.log('login', tempState);

            return tempState;
        default:
            return state;
    }
}

const AppContextProvider = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}

const AppContext = ({ children }) => {
    const appCTX = AppContextProvider();

    return (
        <appContext.Provider value={appCTX}>
            {children}
        </appContext.Provider>
    );
}

export { AppContext, appContext };