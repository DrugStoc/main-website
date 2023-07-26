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
                                Founded in 2016, DrugStoc is a major player in the pharmatech industry in Nigeria adopting
                                advanced technologies in supply-chain management, inventory management, data analytics
                                and trade financing to ensure anti-counterfeit medications reach the patients timely.
                            </p>
                            <h6> What You Can Look Forward To
                            </h6>
                            <ul>
                                <li>By 2025, DrugStoc’s goal is to become the largest last mile distributor of health
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
                        <p> DrugStoc is looking for a <strong>Passionate Procurement Associate</strong> who wants to change the
                            current status quo with healthcare in Sub Saharan Africa. S/he should have proven
                            experience in Quality Management System to help scale to its next stage of growth and
                            expansion.
                        </p>
                        <h6>What You Get To Do
                        </h6>
                        <ul>
                            <li>Evaluate vendor's quotation to ensure that they are in line with the technical and
                                commercial specifications required.
                            </li>
                            <li>Evaluate supplier performance based on set criterias</li>
                            <li>Following up on purchase order delivery and supplier invoices</li>
                            <li>Managing the replenishment of stocks.</li>
                            <li>Assist with demand planning.</li>
                            <li>Assist to perform all procurement and contracting activities.</li>
                            <li>Develop supplier database and establish annual purchasing contracts for lower
                                value, high value items</li>
                            <li>Provide periodic reporting for management on purchasing, controls and processes.
                            </li>
                            <li>Ensure compliance with all laid down processes.</li>
                            <li>Ensure transparency, fairness, efficiency and accountability are evident in all
                                dealings</li>
                            <li>Ensure all procured products conform to health and safety established standards for
                                the organization
                            </li>
                            <li>Monitor shelf life of products</li>
                            <li>Any other duties as may be assigned from time to time</li>
                        </ul>
                        <h6>What It Takes To Succeed</h6>
                        <ul>
                            <li>Familiarity with sourcing and vendor management</li>
                            <li>Interest in market dynamics along with business sense</li>
                            <li>Enviable negotiation skills and relationship management skills</li>
                            <li>Working experience of vendor management software
                            </li>
                            <li>Ability to gather and analyze data and work with figures</li>
                            <li>Solid judgment with ability to make good decisions</li>
                            <li>Strong leadership capabilities</li>
                            <li>First class or a minimum of second class degree in either Statistics, Mathematics,
                                Economics, Chemistry, Physics, Pharmacy an added advantage</li>
                            <li>2+ years of experience in Procurement or Supply Chain Management in the
                                pharmaceutical, Retail & FMCG industry.
                            </li>
                            <li>Experience in the pharmaceutical sector is an added advantage</li>
                            <li>A "change the world" mindset and a can-do attitude.</li>
                        </ul>


                        <h6>Bonus Points</h6>
                        <ul>
                            <li>Experience working in a Supply chain environment</li>
                            <li>Proven working experience as a pharmaceutical procurement manager</li>
                            <li>Knowledge of sourcing and procurement techniques as well as a dexterity in “reading” the market</li>
                        </ul>

                    </div>
                </div>
            </Container>
        </>
    )
};