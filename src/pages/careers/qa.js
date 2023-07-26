import { useRouter } from 'next/router';
import styled from 'styled-components'

export default function executive() {
    const { pathname } = useRouter()

    const Container = styled.div`
    margin: ${pathname === '/jobpage' ? '10px auto' : '150px 0'};
    h4 {
      margin: 30px 0;
    }
    h6 {
      margin-top: 30px;
      font-size: 24px;
      font-weight: bold;
    }
    li {
      margin-top: 10px;
      margin-left: 40px;
    }
  `;
    return (
        <>
            <Container>
                <div className="header">
                    <div className="container">
                        <div style={{ display: pathname === '/jobpage' ? 'none' : undefined }}>
                            <h1>Who are we?</h1>
                            <p>DrugStoc is a tech-enabled pharmaceutical access and distribution platform that connects
                                manufacturers of pharmaceutical products to health care providers in sub-Saharan Africa.
                                Founded in 2015, Our clients are hospitals, pharmacies, clinics, and nursing homes. We are
                                an omnichannel platform that removes any barrier for Licensed health workers to find and
                                purchase genuine medication at the right price for their patients
                            </p>
                            <h6> What You Can Look Forward To
                            </h6>
                            <ul>
                                <li>By 2025, DrugStoc's goal is to become the largest last mile distributor of health
                                    commodities in Nigeria. In an environment plagued with substandard and
                                    counterfeit products, we prioritize quality by operating an end-to-end traceable
                                    supply chain offering our clients visibility over their supply chain.
                                </li>
                                <li>We focus on building strong, diverse teams built from different backgrounds,
                                    experiences & identities.
                                </li>
                            </ul>
                        </div>
                        <h6>Job Description</h6>
                        <p>DrugStoc is looking for a <strong>Passionate Quality Assurance Associate</strong> who wants to change
                            the current status quo with healthcare in Sub Saharan Africa. S/he should have proven
                            experience in Quality Management System to help scale to its next stage of growth and
                            expansion.
                        </p>
                        <h6>What You Get To Do
                        </h6>
                        <ul>
                            <li>Perform process audit, review and execute process improvement where necessary.
                            </li>
                            <li>Lead stock count, Investigate Stock Variances and develop a CAR & PAR on all
                                variances.</li>
                            <li>Conduct on a weekly basis Non Conformity Report and implement Preventive and
                                Corrective action.</li>
                            <li>Conduct and organize trainings</li>
                            <li>Conduct PDSA, Audit reviews on inventory variance and other problems, develop
                                corrective action and preventive action on all inventory variances.</li>
                            <li>Must have proper understanding of 6s and carry out 6s process audit daily.</li>
                            <li>He/she must document NCRs and PARs and CARs and close them on a weekly
                                basis</li>
                            <li>Keep track of all customer complaints and look to resolve them within the next
                                24hours
                            </li>
                            <li>Must have proper understanding of Lean and Kaizen ideologies.</li>
                            <li>Keep accurate documentation according to ALCOA principle and perform statistical
                                analysis.
                            </li>
                            <li>Constantly probe for opportunities for continuous improvement and develop new
                                efficient procedures where necessary
                            </li>
                            <li>Any other duties as may be assigned from time to time.</li>
                        </ul>
                        <h6>What It Takes To Succeed</h6>
                        <ul>
                            <li>Bachelor's Degree</li>
                            <li>Minimum of 3 years' experience in a Quality Management position</li>
                            <li>Proven experienced with Audit and stock taking activity</li>
                            <li>A keen eye for detail and a result driven approach
                            </li>
                            <li>Outstanding communication skills</li>
                            <li>Excellent organizational and leadership skills</li>
                            <li>Proficient in MS Office</li>
                            <li>In depth Understanding of quality procedures.
                            </li>
                            <li>Certification and/or knowledge of quality control procedures according to ISO 9001 is
                                an added advantage.
                            </li>
                            <li>He/she must have a proper understanding of 6sigma. Preferably the DMAIC
                                methodology</li>
                            <li>Decision making skills.</li>
                            <li>Highly organized and detail oriented</li>
                            <li>Multi-tasking and time-management skills, with the ability to prioritize tasks</li>
                            <li>Decision making skills.</li>
                            <li>A "change the world" mindset and a can-do attitude</li>
                        </ul>

                    </div>
                </div>
            </Container>
        </>
    )
};