import styled from "styled-components"

function CourseDetail({title, description, institute, prerequisites, duration, effort}) {
    return <Container>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            <li>Institute: {institute}</li>
            <li>Prerequisites: {prerequisites}</li>
            <li>Duration: {duration}</li>
            <li>Effort: {effort}</li>
        </ul>
    </Container>
}

const Container = styled.div`
  text-decoration: none;
  line-height: 1.2rem;
  color: ${props => props.theme.colors.headerFont};
  margin-bottom: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 4px 4px 15px 3px rgba(0, 0, 0, 0.06);

  h3 {
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding-top: 0;
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 0.1rem 0;
    font-style: italic;
  }
`

export default CourseDetail;