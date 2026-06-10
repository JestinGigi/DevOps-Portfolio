import React from 'react'
import ProjectItem from './ProjectItem'
import stockvis  from '../assets/StockVis.png'
import gitlab from '../assets/gitlab.png'
import k8s from '../assets/k8s.jpg'
import terraform from '../assets/terraform.jpg'

const Projects = () => {
  return (  
    <div id='projects' className='py-16'>
      <div className='max-w-[1040px] m-auto px-4 md:px-20'>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001b5e] to-blue-400 mx-auto rounded-full"></div>
        </div>  
        <div className="grid sm:grid-cols-2 gap-12">
              <ProjectItem img={stockvis} title='StockVis' subtitle='Stock Visualization & Prediction' link='https://github.com/JestinGigi/StockVis'></ProjectItem>
              <ProjectItem 
                img={gitlab} 
                title='GitLab' 
                subtitle='GitLab Monitoring using Docker & Grafana'
                showModal={true}
                description='Automated CI/CD pipelines using GitLab for continuous integration and deployment. Features include automated testing, code quality checks, and containerized deployments.'
              ></ProjectItem>
              <ProjectItem 
                img={k8s} 
                title='EKS' 
                subtitle='K8s Cluster Deployment using VirtualBox'
                showModal={true}
                description='Amazon EKS cluster deployment with Kubernetes orchestration. Implements auto-scaling, load balancing, and secure container management in AWS cloud infrastructure.'
              ></ProjectItem>
              <ProjectItem 
                img={terraform} 
                title='Terraform'
                subtitle='EC2 Instance Provisioning using Terraform' 
                showModal={true}
                description='Infrastructure as Code using Terraform to provision and manage cloud resources. Includes modules for networking, compute instances, storage, and security configurations.'
              ></ProjectItem>
        </div>
      </div>
    </div>
  ) 
}

export default Projects  