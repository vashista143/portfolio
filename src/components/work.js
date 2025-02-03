export default function Work(props){
    return(
        <div>
      <div className="swork">
        <div className="colflex">
        <img src={props.url} alt={props.tag} />
        <p>{props.tag}</p>
        </div>
      </div>
      <div className="swork">
        <img src={props.url2} alt={props.tag2} />
        <p>{props.tag2}</p>
      </div>
    </div>
    )
}