import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 'Jun 2024 - Present',
    duration: '1yr 8mos',
    company: 'HMS NETWORKS INDIA PVT LTD',
    location: 'India, Pune',
    title: 'Junior DevOps Engineer',
    details: [
      'Contributed to HMS Ewon Cloud products, gaining deep understanding of infrastructure, release processes, maintenance, and monitoring.',
      'Designed and maintained GitLab CI/CD pipelines, improving automation and reliability of cloud deployments.',
      'Worked extensively with AWS services (EC2, Kubernetes, networking tools, RabbitMQ) to support scalable cloud infrastructure.',
      'Managed SonarQube migration projects, successfully moving code analysis systems between local and cloud ecosystems.',
      'Implemented monitoring solutions using Grafana and Prometheus, enabling real-time visibility into GitLab pipelines, merge requests, and system health.',
      'Developed automation scripts to streamline project maintenance and release workflows.',
      'Collaborated cross-functionally to ensure smooth project transitions and infrastructure stability.',
      'Selected to be part of the core team setting up Ewon Cloud operations in Pune, contributing to strategic expansion.',
      'Participated in operations tasks during early Ewon Cloud development, resolving critical issues within 1 day, ensuring minimal disruption.'
    ]
  },
  {
    year: 'Aug 2023 - May 2024',
    duration: '10mos',
    company: 'REDLION CONTROLS PVT LTD',
    location: 'India, Pune',
    title: 'Graduate Engineer Trainee',
    details: [
      'Worked on industrial automation products including PM-50 visualization devices, SPM, CUB meters, Switches, and Crimson software.',
      'Maintained and optimized Jenkins CI/CD pipelines, reducing build failures by approximately 30% and accelerating release cycles.',
      'Built and deployed production-ready Docker images, cutting deployment times by nearly 40%.',
      'Managed binary artifacts using JFrog Artifactory and Harbor to streamline storage and retrieval.',
      'Implemented static analysis with SonarQube, reducing critical vulnerabilities by 25%.',
      'Collaborated through GitHub and Git for efficient version control and team workflows.',
      'Gained expertise in Terraform, Ansible, and Kubernetes for infrastructure automation and container orchestration.'
    ]
  },
  {
    year: 'Jan 2022 - Jun 2022',
    duration: '6mos',
    company: 'HACK-X SECURITY',
    location: 'India, Pune',
    title: 'Junior Security Intern',
    details: [
      'Developed and delivered engaging social media content, resulting in a 20% increase in customer engagement.',
      'Performed comprehensive vulnerability assessments and penetration tests for clients, ensuring 100% protection against potential security threats.',
      'Utilized tools like Sqlmap, Commix, Xssmap, and paramspider to enhance efficiency and accuracy of penetration testing.',
      'Demonstrated expertise in employing Nmap, Burp Suite, and various Linux tools for comprehensive VAPT on client applications.'
    ]
  }
]
const Work = () => {
  return (
    <div id="Work" className='py-16'>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Work Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001b5e] to-blue-400 mx-auto rounded-full"></div>
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
