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
            title='GitLab Monitoring'
            subtitle='GitLab Exporter — EC2, Docker & Grafana'
            showModal={true}
            description='Set up GitLab monitoring on an EC2 instance using the GitLab Exporter project. Deployed the exporter via Docker and connected it to Grafana to visualize GitLab metrics including pipeline status, merge request activity, and CI/CD performance in real time.'
          />
          <ProjectItem
            img={k8s}
            title='Kubernetes'
            subtitle='K8s Cluster Setup using Minikube'
            showModal={true}
            description='Set up Kubernetes clusters using Minikube — including a single-node managed cluster and a multi-node cluster with 1 control plane and 2 worker nodes. Practiced pod scheduling, service exposure, and cluster management.'
          />
          <ProjectItem
            img={terraform}
            title='Terraform'
            subtitle='EC2 Instance Provisioning using Terraform'
            showModal={true}
            description='Deployed an EC2 instance on AWS using Terraform. Defined infrastructure as code including instance configuration, security groups, and key pair setup for repeatable, version-controlled cloud provisioning.'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
