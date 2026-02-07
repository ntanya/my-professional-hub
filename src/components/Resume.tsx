import { Briefcase, GraduationCap, Download } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Product Designer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading design for flagship products, managing a team of 4 designers, and establishing design systems.",
    },
    {
      title: "Product Designer",
      company: "Creative Agency Co.",
      period: "2018 - 2021",
      description: "Delivered end-to-end design solutions for clients across fintech, healthcare, and e-commerce.",
    },
    {
      title: "UI/UX Designer",
      company: "Startup Studios",
      period: "2016 - 2018",
      description: "Designed mobile and web applications for early-stage startups, from concept to launch.",
    },
  ];

  const education = [
    {
      degree: "Master of Design",
      school: "Rhode Island School of Design",
      period: "2014 - 2016",
      focus: "Human-Computer Interaction",
    },
    {
      degree: "Bachelor of Arts",
      school: "University of California",
      period: "2010 - 2014",
      focus: "Visual Communication",
    },
  ];

  const skills = [
    "Product Strategy",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Figma",
    "Framer",
    "HTML/CSS",
    "React Basics",
    "Usability Testing",
  ];

  return (
    <section id="resume" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-medium mb-4">
              Resume
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Experience & Education
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
            
            {/* Download Button */}
            <button className="inline-flex items-center gap-2 font-body text-sm font-medium bg-accent text-accent-foreground px-6 py-3 rounded-full hover:shadow-accent hover:scale-105 transition-all duration-300">
              <Download size={16} />
              Download Full Resume
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors duration-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-accent rounded-full" />
                    <span className="font-body text-xs uppercase tracking-widest text-accent font-medium">
                      {job.period}
                    </span>
                    <h4 className="font-display text-xl font-semibold text-foreground mt-1">
                      {job.title}
                    </h4>
                    <p className="font-body text-muted-foreground font-medium mt-1">
                      {job.company}
                    </p>
                    <p className="font-body text-muted-foreground mt-3 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills */}
            <div>
              {/* Education */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="p-6 bg-card rounded-xl shadow-soft">
                      <span className="font-body text-xs uppercase tracking-widest text-accent font-medium">
                        {edu.period}
                      </span>
                      <h4 className="font-display text-xl font-semibold text-foreground mt-1">
                        {edu.degree}
                      </h4>
                      <p className="font-body text-muted-foreground font-medium mt-1">
                        {edu.school}
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-2">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
