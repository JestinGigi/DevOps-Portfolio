import React from 'react'
import { FaAws } from 'react-icons/fa'
import { SiGitlab, SiGrafana, SiKubernetes, SiPython, SiTerraform } from 'react-icons/si'
import Reveal from './Reveal'

const skills = [
  {
    name: 'AWS cloud',
    icon: FaAws,
    summary: 'Running production workloads and device connectivity on AWS, from compute and data to networking and access.',
    tools: ['EC2', 'EKS', 'RDS', 'IoT Core', 'IAM', 'S3', 'Route 53', 'VPC', 'CloudWatch'],
  },
  {
    name: 'Kubernetes & EKS',
    icon: SiKubernetes,
    summary: 'Debugging and operating microservices on EKS, with container lifecycle and cluster management.',
    tools: ['EKS', 'k9s', 'Docker', 'Service discovery'],
  },
  {
    name: 'Terraform & IaC',
    icon: SiTerraform,
    summary: 'Managing Ewon Cloud infrastructure as repeatable, version-controlled code to reduce manual configuration.',
    tools: ['Terraform', 'Git', 'AWS'],
  },
  {
    name: 'CI/CD & GitOps',
    icon: SiGitlab,
    summary: 'Weekly production releases with Flux CD and GitLab CI, plus Jenkins pipelines for firmware delivery.',
    tools: ['GitLab CI/CD', 'Flux CD', 'Jenkins', 'JFrog Artifactory', 'Harbor', 'SonarQube'],
  },
  {
    name: 'Observability & on-call',
    icon: SiGrafana,
    summary: 'Dashboards and alerting against 99.8%/99.6% SLO/SLA targets, backed by 24/7 on-call and root cause analysis.',
    tools: ['Grafana', 'Prometheus', 'CloudWatch', 'Opsgenie', 'Jira Service Desk'],
  },
  {
    name: 'Python & Bash automation',
    icon: SiPython,
    summary: 'Scripting incident investigation, operational tasks and bulk setup work that would otherwise be manual.',
    tools: ['Python', 'Bash', 'Selenium', 'Linux'],
  },
]

const alsoUsed = ['PostgreSQL', 'RabbitMQ', 'Keycloak', 'VPN & networking', 'Jira', 'Confluence', 'GitHub Copilot', 'Rovo']

const TechStack = () => {
  return (
    <section id='expertise' aria-labelledby='expertise-title' className='section'>
      <div className='container-x'>
        <Reveal className='mb-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
          <div>
            <p className='section-label mb-5'>My expertise</p>
            <h2 id='expertise-title' className='heading-2'>The skills that keep production running</h2>
          </div>
          <p className='lg:pb-2'>
            Cloud infrastructure, delivery pipelines and observability, tied together with practical automation.
          </p>
        </Reveal>

        <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
            <Reveal as='li' key={skill.name} delay={(index % 3) * 120} className='card flex flex-col p-8 lg:p-9'>
              <span className='mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-neutral-100' aria-hidden='true'>
                <Icon size={26} />
              </span>
              <h3 className='text-2xl leading-[1.4]'>{skill.name}</h3>
              <p className='mt-3 text-base leading-[1.7]'>{skill.summary}</p>
              <ul className='mt-6 flex flex-wrap gap-2' aria-label={`${skill.name} tools`}>
                {skill.tools.map((tool) => (
                  <li key={tool} className='rounded-lg bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300'>{tool}</li>
                ))}
              </ul>
              <div className='mt-auto pt-8' aria-hidden='true'>
                <span className='block h-1 w-10 bg-neutral-100' />
              </div>
            </Reveal>
            )
          })}
        </ul>

        <Reveal className='mt-10 flex flex-col gap-4 rounded-[20px] border border-neutral-700 p-6 md:flex-row md:items-center md:gap-8 md:p-8'>
          <p className='shrink-0 text-base font-bold uppercase tracking-[0.06em] text-neutral-100'>Also working with</p>
          <p className='text-base'>{alsoUsed.join(' · ')}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default TechStack
