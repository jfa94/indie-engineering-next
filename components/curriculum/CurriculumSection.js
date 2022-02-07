import styled from "styled-components"

import CourseDetail from "./CourseDetail"

function CurriculumSection({sectionData}) {
    return <Container>
        <SectionInfo>
            <h1>{sectionData.title}</h1>
            <p>{sectionData.context}</p>
        </SectionInfo>

        <SectionDetail>
            {sectionData.courses.map((course, i) => <CourseDetail
                key={i} title={course.title}
                description={course.description}
                institute={course.institute}
                prerequisites={course.prerequisites}
                duration={course.duration}
                effort={course.effort}
            />)}
        </SectionDetail>
    </Container>
}

const Container = styled.section`
  line-height: 1.1;
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  margin: 1rem auto 0;
  border-top: 1px solid lightgrey;
`

const SectionInfo = styled.div`
  flex: 1;
  padding: 1.5rem;

  h1 {
    padding: 0.5rem 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
  }

  p {
    line-height: 1.2rem;
    margin: 0;
  }
`

const SectionDetail = styled.div`
  flex: 2;
  padding: 1rem;

  ul {
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
`

export default CurriculumSection;