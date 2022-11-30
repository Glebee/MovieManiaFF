import React from 'react';
import Serial from '../../interfaces/Serial';
import User from '../../interfaces/User';
import { MainButtons } from './MainButtons';
import '../../styles/MainPage/Header.scss'

export const Header: React.FC<{ user: User | null, setSerialsCopy: any, serials: Serial[], setActiveLoginModal: any, setCurrentUser: any}> 
= ({ user, setSerialsCopy, serials, setActiveLoginModal, setCurrentUser }) => {
    return (<div className='header'>
        <MainButtons user = {user} setSerialsCopy = {setSerialsCopy} serials = {serials} setActiveLoginModal = {setActiveLoginModal} setCurrentUser = {setCurrentUser}/>
    </div>);
}