import React from 'react'
import { FiActivity, FiArrowRight, FiArrowUpRight, FiBell, FiCloud, FiServer } from 'react-icons/fi'
import { SiClickhouse, SiGitlab, SiGrafana } from 'react-icons/si'
import ProjectItem from './ProjectItem'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const WindowChrome = ({ label }) => (
  <div className='mb-5 flex items-center gap-2'>
    <span className='h-2.5 w-2.5 rounded-full bg-neutral-600' />
    <span className='h-2.5 w-2.5 rounded-full bg-neutral-600' />
    <span className='h-2.5 w-2.5 rounded-full bg-neutral-600' />
    <span className='ml-2 text-xs font-medium text-neutral-400'>{label}</span>
  </div>
)

const barHeights = [42, 58, 50, 72, 64, 30, 78, 70, 86, 60, 82, 90]

const PipelineVisual = () => (
  <div
    role='img'
    aria-label='Diagram: GitLab CI pipeline metrics flow through GitLab Exporter into ClickHouse and Grafana dashboards, with CloudWatch alarms sending SNS notifications.'
    className='rounded-[20px] bg-neutral-800 p-5 md:p-6'
  >
    <WindowChrome label='gitlab-ci-observability' />
    <ol className='grid grid-cols-2 gap-2'>
      {[
        { label: 'GitLab CI', icon: SiGitlab },
        { label: 'GitLab Exporter', icon: FiActivity },
        { label: 'ClickHouse', icon: SiClickhouse },
        { label: 'Grafana', icon: SiGrafana },
      ].map((step, index) => {
        const Icon = step.icon
        return (
        <li key={step.label} className='rounded-xl bg-neutral-700 p-3'>
          <span className='text-xs font-bold text-neutral-400'>0{index + 1}</span>
          <span className='mt-2 flex items-center gap-2 text-sm font-bold leading-tight text-neutral-100'>
            <Icon className='shrink-0 text-accent' size={16} />
            {step.label}
          </span>
        </li>
        )
      })}
    </ol>
    <div className='mt-3 rounded-xl bg-neutral-700 p-4'>
      <div className='flex items-center justify-between text-xs font-bold text-neutral-300'>
        <span>Pipeline health</span>
        <span>Job failure trends</span>
      </div>
      <div className='mt-4 flex h-20 items-end gap-1.5'>
        {barHeights.map((height, index) => (
          <span
            key={index}
            className={`flex-1 rounded-t ${index === 5 ? 'bg-neutral-500' : index % 3 === 0 ? 'bg-secondary' : 'bg-primary'}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
    <div className='mt-3 flex items-center gap-3 rounded-xl bg-neutral-700 px-4 py-3 text-sm font-bold text-neutral-100'>
      <FiBell className='shrink-0 text-accent' />
      CloudWatch alarm
      <FiArrowRight className='shrink-0 text-neutral-400' />
      SNS notification
    </div>
  </div>
)

const MigrationVisual = () => (
  <div
    role='img'
    aria-label='Diagram: 144 SonarQube projects moved from an on-prem SonarQube instance to SonarQube Cloud using Bash, the SonarQube API and Selenium, saving 16+ engineer-hours.'
    className='rounded-[20px] bg-neutral-800 p-5 md:p-6'
  >
    <WindowChrome label='sonarqube-cloud-migration.sh' />
    <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-3'>
      <div className='rounded-xl bg-neutral-700 p-4'>
        <FiServer className='text-neutral-300' size={22} />
        <p className='mt-3 text-sm font-bold leading-tight text-neutral-100'>On-prem SonarQube</p>
      </div>
      <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-neutral-100'>
        <FiArrowRight size={18} />
      </span>
      <div className='rounded-xl bg-neutral-700 p-4'>
        <FiCloud className='text-accent' size={22} />
        <p className='mt-3 text-sm font-bold leading-tight text-neutral-100'>SonarQube Cloud</p>
      </div>
    </div>
    <div className='mt-3 flex flex-wrap gap-2'>
      <span className='rounded-lg border border-neutral-600 px-3 py-1.5 text-xs font-bold text-neutral-300'>Bash + SonarQube API</span>
      <span className='rounded-lg border border-neutral-600 px-3 py-1.5 text-xs font-bold text-neutral-300'>Selenium for binding</span>
    </div>
    <div className='mt-3 rounded-xl bg-neutral-700 p-4'>
      <div className='flex items-center justify-between text-xs font-bold text-neutral-300'>
        <span>Projects configured</span>
        <span>144 / 144</span>
      </div>
      <div className='mt-3 h-2 rounded-full bg-neutral-800'>
        <div className='h-2 w-full rounded-full bg-primary' />
      </div>
      <div className='mt-5 grid grid-cols-2 gap-3'>
        <p className='text-3xl font-bold leading-none text-neutral-100'>144<span className='mt-2 block text-xs font-bold text-neutral-300'>setups automated</span></p>
        <p className='text-3xl font-bold leading-none text-neutral-100'>16+<span className='mt-2 block text-xs font-bold text-neutral-300'>engineer-hours saved</span></p>
      </div>
    </div>
  </div>
)

const projects = [
  {
    id: 'project-gitlab',
    categories: ['Observability', 'CI/CD'],
    title: 'GitLab CI/CD Monitoring Infrastructure',
    visual: <PipelineVisual />,
    problem: 'GitLab CI/CD needed a dedicated, queryable view of pipeline health and job-failure trends, with alerting for the infrastructure behind it.',
    contribution: [
      'Built production-ready observability infrastructure that uses GitLab Exporter to record pipeline metrics in ClickHouse for analytics.',
      'Designed custom Grafana dashboards to visualise pipeline health and job-failure trends.',
      'Configured CloudWatch alarms and SNS notifications for proactive infrastructure monitoring.',
    ],
    outcome: 'Pipeline health and failure trends are visible in Grafana, with proactive CloudWatch and SNS alerting.',
    tools: ['GitLab CI/CD', 'GitLab Exporter', 'ClickHouse', 'Grafana', 'CloudWatch', 'SNS'],
  },
  {
    id: 'project-sonarqube',
    categories: ['Migration', 'Automation'],
    title: 'On-Prem SonarQube to SonarQube Cloud Migration',
    visual: <MigrationVisual />,
    problem: 'SonarQube analysis for several HMS portfolios had to move from an on-prem instance to SonarQube Cloud, which meant setting up 144 projects.',
    contribution: [
      'Migrated SonarQube analysis for the HMS portfolios from the on-prem instance to SonarQube Cloud.',
      'Automated project setup with Bash and the SonarQube API.',
      'Used Selenium for the project-binding step that the API didn’t support.',
    ],
    outcome: 'Automated 144 SonarQube Cloud project setups, saving 16+ engineer-hours.',
    tools: ['SonarQube Cloud', 'SonarQube API', 'Bash', 'Selenium'],
  },
]

const Projects = () => {
  return (
    <section id='projects' aria-labelledby='projects-title' className='section bg-neutral-700/40'>
      <div className='container-x grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10'>
        <div className='grid min-w-0 grid-cols-1 gap-8 lg:gap-10'>
          <Reveal className='lg:pb-6'>
            <p className='section-label mb-5'>Selected work</p>
            <h2 id='projects-title' className='heading-2'>Projects that made delivery measurable and repeatable</h2>
            <p className='mt-6'>
              Two infrastructure projects covering pipeline observability and a large-scale code-quality migration.
            </p>
            <a href={profile.github} target='_blank' rel='noopener noreferrer' className='arrow-link mt-10 text-lg'>
              More on GitHub <FiArrowUpRight aria-hidden='true' size={22} />
              <span className='sr-only'>(opens in a new tab)</span>
            </a>
          </Reveal>
          <Reveal><ProjectItem {...projects[0]} /></Reveal>
        </div>
        <Reveal delay={150}><ProjectItem {...projects[1]} /></Reveal>
      </div>
    </section>
  )
}

export default Projects
