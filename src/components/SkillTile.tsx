interface Props{
    src: any,
    alt: string
}

function SkillTile(props: Props){
    return(
        <div className="SkillTile">
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default SkillTile;