import styled from "styled-components"

function PathCard(props) {
    const {title, content, pros, cons} = props.cardContent

    return <Card>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
            <h3>Good option if...</h3>
            {pros.map((pro, i) => <p key={i} style={{marginBottom: "0.7rem"}}>&#10004; {pro}</p>)}
            <h3>Not a good fit if:</h3>
            {cons.map((con, i) => <p key={i} style={{marginBottom: "0.7rem"}}>&#10060; {con}</p>)}
        </div>
    </Card>
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 0.5rem;
  padding: 1.5rem;
  flex: 1;
  flex-basis: 400px;
  flex-wrap: wrap;
  border-radius: .5rem;
  line-height: 1.6rem;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);

  h2 {
    margin: 1rem 0;
    width: 100%;
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export default PathCard;