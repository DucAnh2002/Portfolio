import './Skills.css';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

const techSkills: Skill[] = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'ReactJS', level: 80 },
  { name: 'MySQL', level: 65 },
];

const softSkills: Skill[] = [
  { name: 'Problem Solving', level: 80 },
  { name: 'Teamwork', level: 85 },
  { name: 'Communication', level: 75 },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="skills-container" id='skills' ref={containerRef}>
      <h2>My Skills</h2>
      <div className="skills-columns">
        {/* Tech Skills */}
        <div className="skills-left">
          {techSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{visible ? `${skill.level}%` : ''}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: visible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="skills-right">
          {softSkills.map((skill, index) => (
            <div key={index} className="circle-skill">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${visible ? skill.level : 0}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {visible ? `${skill.level}%` : ''}
                </text>
              </svg>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
