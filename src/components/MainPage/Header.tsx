import React from 'react';
import User from '../../interfaces/User';
import { MainButtons } from './MainButtons';

export const Header: React.FC<{ user: User | null }> = ({ user }) => {
    return (<div>
        <MainButtons />
        {/*<LogButton/>*/}
    </div>);
}