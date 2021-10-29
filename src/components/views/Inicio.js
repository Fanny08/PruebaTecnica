import { useEffect, useContext } from 'react';
import Fluid from 'components/layouts/containers/fluid/Fluid';
import Header from 'components/commons/header/Header';
import Character from 'components/commons/character/Character';
import Spinner from 'components/commons/spinner/Spinner';
import * as CharacterController from 'app/character/CharacterController';
import Paginator from 'components/commons/paginator/Paginator';
import AppContext from 'components/context/App';
import './Inicio.scss';

const Inicio = () => {
    const [appState, setAppState] = useContext(AppContext);
    
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getData();
    }, [appState.filter.page, appState.filter.name])

    const getData = () => {
        setAppState({
            loading: true
        });

        CharacterController.list({
            filter: appState.filter
        })
        .then((data) => {
            setAppState({
                data: data.results,
                numberPages: data.info.pages
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setAppState({
                loading: false
            });
        });
    }

    return (
        <Fluid>
            <div className="row justify-content-md-center">
                <Header />
                {appState.loading
                    ?
                        <Spinner />
                    :
                    <>
                        <div className="Inicio col-12 d-flex justify-content-center">
                            <Paginator />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row">
                                {appState.data.map((element, index) => {
                                    return (
                                        <Character
                                            key={index}
                                            data={element}
                                        />
                                    )
                                })}                        
                            </div>
                        </div>
                        <div className="mt-3 col-12 d-flex justify-content-center">
                            <Paginator />
                        </div>
                    </>
                }
            </div>
        </Fluid>
    )
}

export default Inicio;