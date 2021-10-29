import { useContext } from "react";
import AppContext from 'components/context/App';
import './Paginator.scss';

const Paginator = () => {
    const [appState, setAppState] = useContext(AppContext);

    const beforePage = () => {
        const before = appState.filter.page - 1;
        if (before  >= 1) {
            setAppState({
                filter: {
                    page: before
                }
            });
        }
    }

    const nextPage = () => {
        const next = appState.filter.page + 1;
        if (next  <= appState.numberPages) {
            setAppState({
                filter: {
                    page: next
                }
            });
        }
    }

    return (
        <nav className="Paginator" aria-label="Page navigation">
            <ul className="pagination pagination-sm align-items-center">
                <li className="page-item">
                    <a 
                        className="page-link" 
                        href="#"
                        aria-label="Previous"
                        onClick={beforePage}
                    >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Anterior</span>
                    </a>
                </li>
                
                {[...Array(appState.numberPages)].map((element, index) => {
                    index++;
                    return (
                        <li 
                            className= {`page-item ${appState.filter.page === index ? 'active' : 'inactive'}`}
                            key={index}
                        > 
                            <a 
                                className="page-link" 
                                href="#"
                                onClick={() => {
                                    setAppState({
                                        filter: {
                                            page: index
                                        }
                                    });
                                }}
                            >
                                {index}
                            </a>
                        </li>
                    )
                })}

                <li className="page-item">
                    <a 
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={nextPage}
                    >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;