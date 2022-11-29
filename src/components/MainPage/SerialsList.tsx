import React from 'react'
import Serial from '../../interfaces/Serial';
import { Filter } from './Filter';
import { SerialItem } from './SerialItem';

async function getSerialsFromApi() {
    let response = await fetch("https://api.tvmaze.com/shows")
    return await response.json();
}

export const SerialsList: React.FC<{ setSerials: any, setSerialsCopy: any, serials: Serial[], serialsCopy: Serial[], setSelectedSerial: any, setActiveCard: any }>
    = ({ setSerials, setSerialsCopy, serials, serialsCopy, setSelectedSerial, setActiveCard}) => {

        React.useEffect(() => {
            getSerialsFromApi().then((res) => {
                let test: Serial[] = res.map((serial: any) => {

                    return {
                        name: serial.name,
                        summary: serial.summary,
                        image: serial.image.medium,
                        status: serial.status,
                        genres: serial.genres,
                        rating: serial.rating.average,
                        premiered: serial.premiered
                    }
                })

                setSerials(test)
                setSerialsCopy(test)
            })
        }, [])

        const [searchTerm, setSearchTerm] = React.useState('')

        React.useEffect(() => {
            let data = serials.filter((serial) => serial.name.includes(searchTerm))

            setSerialsCopy(data)
        }, [searchTerm])

        return (
            <>
                <Filter onChange={setSearchTerm} />
                {serialsCopy.map((serial, index) => (<SerialItem key={index + 1} serial={serial} setSelectedSerial = {setSelectedSerial} setActiveCard = {setActiveCard} />))}
            </>
        )
    }