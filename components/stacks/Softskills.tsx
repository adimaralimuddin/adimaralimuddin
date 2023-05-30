const skills: string[] = [
  "Productivity",
  "Planing & Time Management",
  "Patience",
  "Passion & Enthusiast",
  "Adaptability & Eager to Learn New Things",
  "Effective Communication in (English, Tagalog, and Indonesian)",
  "Problem Solver",
];

// communication skills (english,tagalog,indonesian)
// problem solver
// time management & planing
// love to learn new things and adapt

// patience
// multi tasking
// fast learner/ self taught
// passionate & entausiast
// Leadership
// patient
// Teamwork & collaboration
// planning & time management
// adaptability
// problem-solver

export default function Softskills() {
  return (
    <div className="py-12">
      <div className="flex gap-4 w-full max-w-5xl mx-auto justify-between">
        <div className="flex flex-col flex-1  justify-center">
          <h1 className="text-5xl font-bold pb-3">Soft Skills</h1>
          <h2 className="text-3xl">
            I Practice My Work inlined With Valuable Personality in working
            Environment
            {/* Soft skills are very essentials in development. with soft skills,
            the team are able to accomplish tasks. */}
          </h2>
        </div>
        <div className="flex-1 p-4 max-w-[40%]d">
          {skills?.map((skill) => (
            <li className="text-xl font-semibold" key={skill}>
              {skill}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
