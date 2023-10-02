import Tags from "./Tags";

const Mycard = (props) => {
    return (
        <div className="card">
            <img src={props.imagen}></img>
            <h2>{props.name}</h2>
            <p>{props.descripcion}</p>
            <Tags diseño={props.estilo} perro={props.etiqueta}></Tags>
        </div>
    );
};

export default Mycard;
