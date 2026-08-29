import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 'Jun 2024 - Present',
    duration: '2yr 2mos',
    company: 'HMS NETWORKS INDIA PVT LTD',
    location: 'Pune, Maharashtra',
    title: 'Junior SRE & DevOps Engineer',
    details: [
      'Resolved 10+ customer- and developer-reported production incidents per week across 15+ microservices deployed on EKS, performing root-cause analysis via k9s log inspection and RDS database queries, achieving a 75% resolution rate.',
      'Led weekly release cycles for Ewon Cloud, coordinating deployments across microservices with minimal downtime.',
      'Built Grafana dashboards and alerting rules for production infrastructure, improving real-time visibility into service health and reducing time-to-detect for critical issues.',
      'Administered AWS IoT Core for 200+ Ewon Edge Gateways, including device shadows and rules engine configuration.',
      'Maintained Ewon Cloud infrastructure using Terraform, enabling repeatable, version-controlled infrastructure provisioning.'
    ]
  },
  {
    year: 'Aug 2023 - May 2024',
    duration: '10mos',
    company: 'REDLION CONTROLS PVT LTD',
    location: 'Pune, Maharashtra',
    title: 'Graduate Engineer Trainee',
    details: [
      'Supported industrial automation product lines including PM-50 visualization devices, SPM and CUB meters.',
      'Maintained and optimized Jenkins CI/CD pipelines, reducing build failures.',
      'Built and deployed production-ready Docker images as development environments for building firmware hex files.',
      'Gained hands-on exposure to Jenkins, JFrog Artifactory, SonarQube, Dockerization, and Bash scripting.'
    ]
  },
  {
    year: 'Jan 2022 - Jun 2022',
    duration: '6mos',
    company: 'HACK-X SECURITY',
    location: 'Pune, Maharashtra',
    title: 'Junior Security Intern',
    details: [
      'Performed vulnerability assessments and penetration tests for clients, ensuring robust protection against potential security threats.',
      'Utilized tools such as Sqlmap, Commix, XSSmap, and ParamSpider to enhance efficiency and accuracy of penetration testing.',
      'Applied Nmap, Burp Suite, and Linux tooling for comprehensive VAPT on client applications.'
    ]
  }
]

const Work = () => {
  return (
    <div id="Work" className='py-24' style={{ background: 'linear-gradient(180deg, #0d1117 0%, #030712 100%)' }}>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-16 text-center">
          <p className='font-mono text-xs tracking-widest mb-3' style={{ color: '#06b6d4' }}>02 / EXPERIENCE</p>
          <h2 className='text-4xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9' }}>Work Experience</h2>
          <div className='w-16 h-0.5 mx-auto rounded-full section-underline' />
        </div>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            duration={item.duration}
            company={item.company}
            location={item.location}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
