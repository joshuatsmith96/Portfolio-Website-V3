interface Props{
    text: any
}

function SkillBadge(props: Props){
    return(
        <div className="SkillBadge">
            <p>{props.text}</p>
        </div>
    )
}

export default SkillBadge