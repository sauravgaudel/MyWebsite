import Section from './Section'
export default function About() {
  return (
    <Section id="about" title="About me" alt>
      <div className="about reveal">
        <p>I'm a Computer Engineering student from Nepal. I like understanding how systems work end to end, from the packets crossing a network to the models making predictions on top of data.</p>
        <p>My interests sit at the meeting point of <strong>AI/ML</strong> and <strong>cybersecurity</strong>, such as testing how robust speech models are against adversarial input. I'm equally interested in <strong>networking</strong> and <strong>software development</strong>.</p>
        <p>I learn by building real projects and doing research. Right now I'm deepening my machine-learning skills, working with Linux, DNS and OSPF on a campus network, and building APIs with FastAPI and React.</p>
      </div>
    </Section>
  )
}
