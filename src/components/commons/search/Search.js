import { useState, useContext } from 'react';
import AppContext from 'components/context/App';
import './Search.scss';

const Search = (props) => {
    const [value, setValue] = useState();
    const [timer, setTimer] = useState();
    const [appState, setAppState] = useContext(AppContext);

    const onWrite = (event) => {
        const value = event.target.value;
        setValue(value);

        clearTimeout(timer);
        setTimer(setTimeout(() => {
            setAppState({
                filter: {
                    page: 1,
                    name: value
                }
            });
        }, 500));
    }

    return (
        <div className="Search col-12">
            <input 
                type="text" 
                value={value}
                placeholder="¿Qué personaje quieres buscar?..."
                onChange={onWrite}
            />
        </div>
    )
}

export default Search;