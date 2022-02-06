import Head from "next/head"
import styled from 'styled-components'

import Welcome from '../components/index/Welcome'
import PathCard from "../components/index/PathCard"
import About from "../components/index/About"

const cardContent = [{
    title: "University",
    content: "A Computer Science degree is the best option if you are interested in gaining a deep understanding of how computers work. However, most Computer Science degrees include extensive complimentary education and are not a requirement to become a Software Engineer. In fact, more than half of US-based Software Engineers do not have a formal Computer Science education.",
    pros: ["You want to have a comprehensive understanding of the scientific field of computing.", "You are interested in further education and/or a career in deep-tech (e.g. advanced electronics or quantum computing)."],
    cons: ["You do not want to spend three to five years in full-time education.", "University fees in your area are not accessible."],
}, {
    title: "Coding Bootcamp",
    content: "Bootcamps offer intensive teaching over the course of a few weeks or months. This is a compelling option for anyone looking to quickly learn the basics, but provides limited education in the fundamentals of Computer Science. Bootcamps don't often teach the infrastructure needed to publish a project or deploy code. Prices vary by company and location, but generally cost upwards of 8,000 USD.",
    pros: ["You are in a hurry, and want to quickly start writing code.", "You have a clear and specific goal in mind (e.g. starting a new job that requires knowledge of a specific language)."],
    cons: ["You will be involved in complex projects, deploying code, or using more than a single language.", "You want or need a wider understanding of Computer Science."],
}, {
    title: "Self-learning",
    content: "Teaching yourself Computer Science&mdash;either online or through academic texts&mdash;is usually the most affordable option. It&lsquo;s also a great way to customise your learning, and to focus on the areas that are most relevant or interesting to you. However, committing to learning Computer Science on your own is no small feat, and staying motivated can be a challenge. The lack of structure makes it difficult to determine what to learn and in which order.",
    pros: ["You are on a budget, or are looking for the best value-for-money.", "You need the flexibility to learn around other commitments.", "You would like the freedom to choose learning material that fits your particular situation."],
    cons: [<>Having a widely-recognised certificate or degree is a must for you (this might not be as crucial as you think! See <a href="https://www.freecodecamp.org/news/do-you-need-a-computer-science-degree-to-work-in-tech/">here</a> for an example).</>],
}]

function Index(props) {
    return <>
        <Head>
            <title>Indie Engineering: Learn Computer Science Online for Free</title>
            <meta name="description"
                  content="Want to break into the tech industry but don't know where to start? The Indie Engineering curriculum is a free resource for aspiring engineers and entrepreneurs covering the key areas of Computer Science."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Welcome/>
        <PathContainer>
            <PathTitle>
                <h1>The most common <span>paths to learn Computer Science</span></h1>
            </PathTitle>
            <CardContainer>
                {cardContent.map((content, i ) => <PathCard key={i} cardContent={content}/>)}
            </CardContainer>
        </PathContainer>
        <About/>
    </>
}

const PathContainer = styled.div`
  background: linear-gradient(6deg, var(--site-background) 75%, #EFF3FE 75%);
`

const PathTitle = styled.div`
  display: flex;
  justify-content: center;
  
  h1 {
    line-height: 2.4rem;
    font-size: 2.2rem;
    margin: 0 4rem;
    
    @media(max-width: 650px) {
      margin: 0 1rem;
    }
  }

  span {
    color: var(--secondary-color);
  }
`

const CardContainer = styled.div`
  margin: 1rem auto;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5rem;
  }

  @media (max-width: 650px) {
    padding: 0 1rem;
    margin: 0.5rem;
  }
`

export default Index;