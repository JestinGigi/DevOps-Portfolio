import React from 'react'
import ProjectItem from './ProjectItem'
import stockvis from '../assets/StockVis.png'
import gitlab from '../assets/gitlab.png'
import k8s from '../assets/k8s.jpg'
import terraform from '../assets/terraform.jpg'

const Projects = () => {
  return (
    <div id='projects' className='py-24' style={{ background: 'linear-gradient(180deg, #0d1117 0%, #030712 100%)' }}>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-16 text-center">
          <p className='font-mono text-xs tracking-widest mb-3' style={{ color: '#8b5cf6' }}>04 / PROJECTS</p>
          <h2 className='text-4xl font-extrabold tracking-tight mb-3' style={{ color: '#f1f5f9' }}>Projects</h2>
          <div className='w-16 h-0.5 mx-auto rounded-full' style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectItem img={stockvis} title='StockVis' subtitle='Stock Visualization & Prediction' link='https://github.com/JestinGigi/StockVis' />
          <ProjectItem
            img={gitlab}
            title='GitLab'
            subtitle='GitLab Monitoring using Docker & Grafana'
            showModal={true}
            description='Automated CI/CD pipelines using GitLab for continuous integration and deployment. Features include automated testing, code quality checks, and containerized deployments.'
          />
          <ProjectItem
            img={k8s}
            title='EKS'
            subtitle='K8s Cluster Deployment using VirtualBox'
            showModal={true}
            description='Amazon EKS cluster deployment with Kubernetes orchestration. Implements auto-scaling, load balancing, and secure container management in AWS cloud infrastructure.'
          />
          <ProjectItem
            img={terraform}
            title='Terraform'
            subtitle='EC2 Instance Provisioning using Terraform'
            showModal={true}
            description='Infrastructure as Code using Terraform to provision and manage cloud resources. Includes modules for networking, compute instances, storage, and security configurations.'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
