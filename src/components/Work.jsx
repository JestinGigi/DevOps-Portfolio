import React from 'react'
import WorkItem from './WorkItem'
import Reveal from './Reveal'

const data = [
  {
    period: 'June 2024 – Present',
    company: 'HMS Networks India Pvt Ltd',
    location: 'Pune, Maharashtra',
    title: 'SRE & DevOps Engineer',
    current: true,
    details: [
      'Resolve 10+ production incidents a week across 15+ microservices with a 75% resolution rate, using Grafana, k9s, RDS queries and Python/Bash automation.',
      'Built Grafana dashboards and alerting against 99.8%/99.6% SLO/SLA targets, and take part in 24/7 on-call with root cause analysis.',
      'Lead weekly releases with GitOps (Flux CD, GitLab CI) and manage Ewon Cloud infrastructure in Terraform.',
    ],
  },
  {
    period: 'August 2023 – May 2024',
    company: 'Redlion Controls Pvt Ltd',
    location: 'Pune, Maharashtra',
    title: 'Junior DevOps Engineer (GET)',
    details: [
      'Owned 50+ Jenkins CI/CD pipelines for firmware builds across 5+ industrial automation products.',
      'Built Docker-based build environments and integrated SonarQube into C++ firmware pipelines.',
      'Primary owner of Jenkins and JFrog Artifactory, with a structured handover to the incoming DevOps lead.',
    ],
  },
  {
    period: 'January 2022 – June 2022',
    company: 'Hack X Security',
    location: 'Pune, Maharashtra',
    title: 'Junior Security Intern',
    details: [
      'Ran vulnerability assessments and penetration tests on 2+ client web apps, documenting SQLi, command injection and CORS findings.',
      'Automated reconnaissance and testing with Sqlmap, Nmap and Burp Suite, aligned to the OWASP Top 10.',
      'Built a Bash tool that checks whether API keys are live, flagging 2+ active leaks and cutting manual review time by 70%.',
    ],
  },
]

const Work = () => {
  return (
    <section id='experience' aria-labelledby='experience-title' className='section'>
      <div className='container-x'>
        <Reveal className='mb-14 max-w-3xl'>
          <p className='section-label mb-5'>Experience</p>
          <h2 id='experience-title' className='heading-2'>Where I’ve built and run infrastructure</h2>
        </Reveal>
        <ol className='border-t border-neutral-700'>
          {data.map((item) => (
            <WorkItem key={item.company} {...item} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Work
