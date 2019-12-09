import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { jokesReducer } from './reducers/jokes.reducer';
import { userReducer } from './reducers/user.reducer';

const GlobalContext = createContext({});

export function GlobalProvider({ children }: { children: ReactNode }) {
    const state = {
        jokes: useReducer(jokesReducer, []),
        user: useReducer(userReducer, {})
    };

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}

export enum State {
    Jokes = 'jokes',
    User = 'user',
}

export const useGlobalState = (key: string) => useContext(GlobalContext)[key][0];
export const useGlobalDispatch = (key: string) => useContext(GlobalContext)[key][1];
