import styled from "styled-components"
import Card from "../Card"

function PathCard(props) {
    const {title, content, pros, cons} = props.cardContent

    return <CardMod>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
            <h3>Good option if...</h3>
            {pros.map((pro, i)=> <p key={i} style={{marginBottom: "0.7rem"}}>&#10004; {pro}</p>)}
            <h3>Not a good fit if:</h3>
            {cons.map((con, i)=> <p key={i} style={{marginBottom: "0.7rem"}}>&#10060; {con}</p>)}
        </div>
    </CardMod>
}

const CardMod = styled(Card)`
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export default PathCard;