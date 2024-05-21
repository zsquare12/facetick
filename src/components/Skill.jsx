/*
this is from skill section 
*/

const my_skills = {
    "Hackerrank Python Basic":          "static/images/hackerrank_python_basic.png",
    "Python Core Sololearn":            "static/images/python_core_sololearn.png",
    "Python Intermediate Sololearn":    "static/images/python_intermediate_sololearn.png",
    "Data Structures Python Sololearn": "static/images/DS_python_sololearn.png",
    "Python for Beginners Sololearn":   "static/images/python_for_beginners_sololearn.png",
    "Typing Speed":                     "static/images/typingSpeed.png",
    "HTML Sololearn":                   "static/images/html_sololearn.jpg",
    "CSS Hackerrank":                   "static/images/css_hackerrank.png",
    "JavaScript Sololearn":             "static/images/js_sololearn.png"
};

const my_skills_jsx = (<>
    {Object.entries(my_skills).map(([key, value], index) => (
        <div key={index} className="certificate_img"><img src={value} alt={key} /></div>
))}
</>)


function Skill() {

    return (<>

        <section className="certificates">
            <h1>Skills</h1>
            <p>Some of my certificates in programming and and web development </p>
            <div className="certificates_container">
                {my_skills_jsx}
            </div>
        </section>
    </>)
}

export default Skill;