import styled from "styled-components"
import Image from "next/image"

function PathCard(props) {
    const {title, content, pros, cons} = props.cardContent

    let icon
    switch (title) {
        case "University":
            icon = "university-icon.svg"
            break
        case "Coding Bootcamp":
            icon = "bootcamp-icon.svg"
            break
        case "Self-learning":
            icon = "self-learning-icon.svg"
    }

    return <Card>
        <Heading>
            <Icon src={`/assets/icons/${icon}`} alt={icon} width={45} height={45}/>
            <h2>{title}</h2>
        </Heading>
        <p>{content}</p>
        <div>
            <h3>Advantages</h3>
            {pros.map((pro, i) => <p key={i} style={{marginBottom: "0.7rem"}}>&#10004;  {pro}</p>)}
            <h3>Disadvantages</h3>
            {cons.map((con, i) => <p key={i} style={{marginBottom: "0.7rem"}}>&#10060;  {con}</p>)}
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
    margin: 1rem;
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

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Icon = styled(Image)`
  color: ${props => props.theme.colors.headerFont}
`

export default PathCard;