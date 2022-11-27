import Serial from './Serial';

interface User{
    mail: string,
    password: string, 
    serials: Serial[]
}

export default User