export const Filter : React.FC<{onChange: any}> = ({onChange}) => {
    return (<div>
        <input type="text" onChange={(e) => onChange(e.target.value)}></input>
    </div>)
}