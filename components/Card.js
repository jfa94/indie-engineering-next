import styled from "styled-components"

function Card(props) {
    return <StyledCard>
        {props.children}
    </StyledCard>
}

const StyledCard = styled.div`
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
`

export default Card;