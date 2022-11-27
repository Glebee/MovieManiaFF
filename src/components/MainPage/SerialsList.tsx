import React from 'react'
import Serial from '../../interfaces/Serial';
import { SerialItem } from './SerialItem';

async function getSerialsFromApi() {
    let response = await fetch("https://api.tvmaze.com/shows")
    return await response.json();
}

export const SerialsList: React.FC = () => {

    const [serials, setSerials] = React.useState<Serial[]>([]);
    React.useEffect(() => {
        getSerialsFromApi().then((res) => {
            let test: Serial[] = res.map((serial: any) => {

                return {
                    name: serial.name,
                    summary: serial.summary,
                    image: serial.image.medium,
                    status: serial.status,
                    genres: serial.genres,
                    rating: serial.rating.average
                }
            })

            setSerials(test)
        })
    }, [])

    React.useEffect(() => {
        console.log(serials)
    }, [serials])

    return (
        <>
            {serials.map((serial, index) => (<SerialItem key = {index + 1} serial = {serial}/>))}
        </>
    )
}