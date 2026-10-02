import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const stats = [
  { value: '3+', label: 'Years in DevOps & SRE' },
  { value: '10+', label: 'Production incidents resolved weekly' },
  { value: '15+', label: 'Microservices supported in production' },
  { value: '50+', label: 'Jenkins CI/CD pipelines owned' },
]

const employers = ['HMS Networks India', 'Redlion Controls', 'Hack X Security']

const About = () => {
  return (
    <section id='about' aria-labelledby='about-title' className='section bg-neutral-700/40'>
      <div className='container-x'>
        <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
          <div>
            <p className='section-label mb-5'>About me</p>
            <h2 id='about-title' className='heading-2'>I keep production reliable, observable and automated</h2>
            <p className='mt-6'>
              DevOps Engineer with 3+ years managing production infrastructure on AWS (EKS, RDS, EC2 and IoT Core) and driving observability through Grafana, Prometheus and Terraform-based automation. My background spans SRE operations, DevOps tooling and security fundamentals from an early VAPT internship.
            </p>
            <a href='#experience' className='arrow-link mt-10 text-lg'>
              See my experience <FiArrowRight aria-hidden='true' size={22} />
            </a>
          </div>

          <div className='lg:pt-14'>
            <dl className='grid grid-cols-2 gap-x-8 gap-y-10'>
              {stats.map((stat) => (
                <div key={stat.label} className='flex flex-col gap-3 border-t border-neutral-600 pt-6'>
                  <dt className='order-2 max-w-[14rem] text-base font-bold leading-[1.35] text-neutral-100'>{stat.label}</dt>
                  <dd className='order-1 text-[clamp(3rem,2.4rem+2vw,4.25rem)] font-bold leading-none tracking-[-0.03em] text-neutral-100'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className='mt-10'>
              I focus on reducing incident-resolution overhead, automating repetitive operational work and improving reliability across microservices and industrial automation environments.
            </p>
          </div>
        </div>

        <div className='mt-20 flex flex-col gap-6 border-t border-neutral-600 pt-10 md:flex-row md:items-center md:justify-between'>
          <p className='text-base font-bold uppercase tracking-[0.06em] text-neutral-100'>Where I’ve worked</p>
          <ul className='flex flex-wrap gap-x-10 gap-y-3'>
            {employers.map((employer) => (
              <li key={employer} className='text-xl font-bold text-neutral-300'>{employer}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
