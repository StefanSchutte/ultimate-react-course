import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "TypeScript",
        level: "beginner",
        color: "#FF3B00"
    },
    {
        skill: "Vue",
        level: "advanced",
        color: "#60DAFB"
    },
];

/**
* Represents the skills data for the SkillList component.
* @typedef {Object} SkillData
* @property {string} skill - The name of the skill.
* @property {string} level - The proficiency level of the skill (beginner, intermediate, advanced).
* @property {string} color - The color associated with the skill.
*/

/**
 * The main component of the application.
 * Renders a card with user information and a list of skills.
 * @returns {JSX.Element} The rendered component.
 */
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

/**
 * Renders the avatar image.
 * @returns {JSX.Element} The rendered avatar component.
 */
function Avatar() {
  return <img className="avatar" src="/IMG.JPG" alt="Jonas Schmedtmann"/>;
}

/**
 * Renders the introduction section.
 * @returns {JSX.Element} The rendered introduction component.
 */
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

/**
 * Renders the list of skills.
 * @returns {JSX.Element} The rendered skill list component.
 */
function SkillList() {
  return (
      <div className="skill-list">
        {/*<Skill skill="React" emoji="" color="blue" />*/}
        {/*<Skill skill="HTML+CSS" emoji="" color="orange" />*/}
        {/*<Skill skill="JavaScript" emoji="" color="yellow" />*/}
        {/*<Skill skill="Github" emoji="" color="orangered" />*/}
        {/*<Skill skill="TypeScript" emoji="" color="blue" />*/}
        {/*<Skill skill="Vue" emoji="" color="green" />*/}
          {skills.map((skill) => (
              <Skill skill={skill.skill} color={skill.color} level={skill.level} />
          ))}
      </div>
  );
}

// function Skill(props) {
//   return (
//       <div className="skill" style={{ backgroundColor: props.color }}>
//         <span>{props.skill}</span>
//         <span>{props.emoji}</span>
//       </div>
//   );
// }

/**
 * Renders a single skill item.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.skill - The name of the skill.
 * @param {string} props.color - The color associated with the skill.
 * @param {string} props.level - The proficiency level of the skill.
 * @returns {JSX.Element} The rendered skill component.
 */
function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
        {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
      </span>
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
