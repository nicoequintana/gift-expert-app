import { useState } from "react";


export const AddCategory = ({ onNewValue }) => {

    const [ inputValue, setInputValue ] = useState( '' )

    const onInputChange = ({ target }) => {
        
        //console.log(target.value);

        let newValue = target.value.toUpperCase();
        setInputValue( newValue );

    }

    const onSubmit = (event) => {
        event.preventDefault();
        let newValue = inputValue.trim()
        if (newValue.length < 1) return;
        onNewValue( newValue )
        setInputValue('')
    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type='text'
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
                
        </form>
    )
}

