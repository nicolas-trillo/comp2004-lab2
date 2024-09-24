export default function Card(props) {
    return (
        <div className="hotel-card">
            <img src={props.img} alt={"image of " + props.name + " in " + props.location} className="hotel-img" />
            <h3>{props.location}</h3>
            <p className="grey-text"><b>{props.name}</b></p>
            <p className={props.rating < 4.0? "red-text" : "green-text"}>{props.rating} ★</p>
            <p className="grey-text">${props.price}/night</p>
        </div>
    )
}