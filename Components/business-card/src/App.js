import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

export default function App() {
  return (
      <div className="card">
        <div>
          <Avatar />
        </div>
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
          <SkillList />
        </div>
      </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/IMG.JPG" alt="Jonas Schmedtmann"/>;
}

function Intro() {
  return (
      <div>
        <h1>Stefan Schutte</h1>
        <p>
          "As an enthusiastic and dedicated entry-level Software Developer, I bring a unique blend of academic excellence, diverse professional experiences, and a relentless commitment to continuous learning. My foundation in Communication Science, coupled with practical skills honed at CodeSpace Academy and Udemy courses, positions me as a versatile individual ready to make a meaningful impact in the dynamic field of software development."
        </p><p>
        I am looking for a position where I can learn on the job. I completed my Software Development course at CodeSpace Academy. I have also completed many courses on Udemy and plan to continue expanding my knowledge through learning and practical application. My studies have prepared me to be able to learn rapidly and I am committed to learning new technologies and programming languages. Languages that I have learned about includes: HTML, CSS, JavaScript and JS frameworks.
      </p><p>
        I earned my B.A. in Communication Science with a focus on Media Studies and Journalism in 2015 from the University of the Free State. After university, I worked in the fruit industry and also taught English as a foreign language.

      </p>
      </div>
  );
}

function SkillList() {
  return (
      <div className="skill-list">
        <Skill skill="React" emoji="" color="blue" />
        <Skill skill="HTML+CSS" emoji="" color="orange" />
        <Skill skill="JavaScript" emoji="" color="yellow" />
        <Skill skill="Github" emoji="" color="orangered" />
        <Skill skill="TypeScript" emoji="" color="blue" />
        <Skill skill="Vue" emoji="" color="green" />
      </div>
  );
}

function Skill(props) {
  return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>
);
