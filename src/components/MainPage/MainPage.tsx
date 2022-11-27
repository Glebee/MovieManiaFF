import React from 'react';
import User from '../../interfaces/User';
import {Header} from './Header'
import { SerialsList } from './SerialsList';

export const MainPage : React.FC<{user : User | null}> = ({user}) => {
    return (<div>
        <Header user = {user}/>
        <SerialsList />
    </div>)
}