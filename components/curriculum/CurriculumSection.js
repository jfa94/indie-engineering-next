import styled from "styled-components"

import Card from "../Card"

function CurriculumSection(props) {
    const {_id} = props

    return <Container id={_id}>
        <Card>
            Text
        </Card>
    </Container>
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  border-top: 1px solid lightgrey;
`

export default CurriculumSection;