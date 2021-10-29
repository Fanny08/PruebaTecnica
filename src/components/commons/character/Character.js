import "./Character.scss";

const Character = (props) => {
    return (
        <div className="Character col-6 col-md-3">
            <div className={`content ${props.data.status}`}>
                <div className="header">
                    <img className="img-fluid" src={props.data.image}/>
                </div>
                <div className="body">
                    <div className="name">
                        <span className="data">{props.data.name}</span>
                    </div>
                    <div className="species">
                        <span className="info">Especie</span>
                        <span className="data">{props.data.species}</span>
                    </div>
                    <div className="gender">
                        <span className="info">Genero</span>
                        <span className="data">{props.data.gender}</span>
                    </div>
                    <div className="type">
                        <span className="info">Tipo</span>
                        <span className="data">{props.data.type}</span>
                    </div>
                    <div className="location">
                        <span className="info">Ubicacion</span>
                        <span className="data">{props.data.location.name}</span>
                    </div>
                    <div className="status">
                        <span className="info">Status</span>
                        <span className="data">{props.data.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character;