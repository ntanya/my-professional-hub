import { Briefcase, GraduationCap, Download } from "lucide-react";
import Layout from "@/components/Layout";

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
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Curriculum Vitae
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic text-foreground mb-8">
                Experience & Education
              </h1>
              <div className="w-12 h-px bg-foreground/30 mx-auto mb-10" />
              
              {/* Download Button */}
              <button className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] bg-foreground text-background px-8 py-4 hover:opacity-90 transition-all duration-300">
                <Download size={14} />
                Download Resume
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-foreground" />
                  </div>
                  <h2 className="font-display text-2xl italic text-foreground">Experience</h2>
                </div>

                <div className="space-y-10">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l border-border">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-foreground rounded-full" />
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {job.period}
                      </span>
                      <h3 className="font-display text-xl italic text-foreground mt-2">
                        {job.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {job.company}
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Skills */}
              <div>
                {/* Education */}
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 border border-border flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-foreground" />
                    </div>
                    <h2 className="font-display text-2xl italic text-foreground">Education</h2>
                  </div>

                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="p-8 border border-border">
                        <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {edu.period}
                        </span>
                        <h3 className="font-display text-xl italic text-foreground mt-2">
                          {edu.degree}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                          {edu.school}
                        </p>
                        <p className="font-body text-xs text-muted-foreground mt-3 uppercase tracking-[0.1em]">
                          Focus: {edu.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="font-display text-2xl italic text-foreground mb-8">Skills</h2>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="font-body text-xs px-4 py-2 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-300 cursor-default"
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
    </Layout>
  );
};

export default Resume;
