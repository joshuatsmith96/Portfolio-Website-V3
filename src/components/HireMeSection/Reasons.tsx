interface Props{
    reason: string,
    img: any
}

function Reasons(props: Props){
    return(
        <div className="reveal Reasons">
            <img src={props.img} alt="" style={{width: "20px", height: "20px"}}/>
            <p>{props.reason}</p>
        </div>
    )
}

export default Reasons;