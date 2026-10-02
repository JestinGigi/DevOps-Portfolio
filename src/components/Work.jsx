import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    period: 'June 2024 – Present',
    company: 'HMS Networks India Pvt Ltd',
    location: 'Pune, Maharashtra',
    title: 'SRE & DevOps Engineer',
    current: true,
    details: [
      'Resolved 10+ customer-reported production incidents per week across 15+ microservices using Grafana log drill-down, k9s logs, RDS database queries and Python + Bash automation, achieving a 75% resolution rate.',
      'Built Grafana dashboards and alerting rules for release managers and production infrastructure against defined SLO/SLA targets (99.8%/99.6%), improving observability and reducing time to detect critical issues.',
      'Troubleshoot production issues across 200+ gateways using device shadows and job status to diagnose connectivity and command-delivery failures.',
      'Led weekly production and pre-production release cycles using GitOps practices (Flux CD / GitLab CI), coordinating deployments across multiple microservices with minimal downtime.',
      'Managed Ewon Cloud infrastructure through Terraform, enabling repeatable, version-controlled provisioning and reducing manual configuration.',
      'Participate in 24/7 on-call rotations using Opsgenie and Jira Service Desk, triaging critical production alerts and performing root cause analyses that drive incident response workflows.',
      'Designed and operationalised a structured disaster recovery runbook for restoring multi-tier cloud services from AWS Backup vaults into Amazon Aurora RDS clusters.',
    ],
  },
  {
    period: 'August 2023 – May 2024',
    company: 'Redlion Controls Pvt Ltd',
    location: 'Pune, Maharashtra',
    title: 'Junior DevOps Engineer (GET)',
    details: [
      'Owned and maintained 50+ Jenkins CI/CD pipelines supporting firmware builds and release processes for 5+ industrial automation products.',
      'Built production-ready Docker-based development environments for repeatable firmware compilation and delivery of validated hex artifacts.',
      'Integrated SonarQube analysis into C++ firmware pipelines to detect issues earlier, enforce coding standards and reduce manual review dependency.',
      'Served as primary owner for Jenkins and JFrog Artifactory infrastructure and completed a structured knowledge transfer to the incoming DevOps lead.',
    ],
  },
  {
    period: 'January 2022 – June 2022',
    company: 'Hack X Security',
    location: 'Pune, Maharashtra',
    title: 'Junior Security Intern',
    details: [
      'Performed vulnerability assessments and penetration tests on 2+ client web applications, identifying SQLi, command injection and CORS issues and documenting them with severity ratings and remediation guidance.',
      'Automated reconnaissance and testing with Sqlmap, Commix, ParamSpider, Nmap and Burp Suite, aligned to the OWASP Top 10.',
      'Built a Bash tool that validates whether user-supplied API keys are live, flagging 2+ active leaks and cutting manual review time by 70%.',
      'Collaborated to develop and deliver social media content, resulting in a 20% increase in customer engagement.',
    ],
  },
]

const Work = () => {
  return (
    <section id='experience' aria-labelledby='experience-title' className='section'>
      <div className='container-x'>
        <div className='mb-14 max-w-3xl'>
          <p className='section-label mb-5'>Experience</p>
          <h2 id='experience-title' className='heading-2'>Where I’ve built and run infrastructure</h2>
        </div>
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
