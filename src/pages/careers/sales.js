import { useRouter } from 'next/router';
import styled from 'styled-components'

export default function Sales() {
    const router = useRouter();
    const pathname = router.pathname
    return (
        <>
            <Container>
                <div className="header">
                    <div className="container">
                        <div style={{ display: pathname === '/jobpage' ? 'none' : undefined }}>
                            <h1>Who are we?</h1>
                            <p>DrugStoc is a tech-enabled pharmaceutical access and distribution platform that connects manufacturers of pharmaceutical products to health care providers in sub-Saharan Africa. Founded in 2016, Our clients are hospitals, pharmacies, clinics, and nursing homes. We are an omnichannel platform that removes any barrier for Licensed health workers to find and purchase genuine medication at the right price for their patients.
                            </p>
                            <h6> What You Can Look Forward To
                            </h6>
                            <ul>
                                <li>By 2025, DrugStoc's goal is to become the largest last mile distributor of health commodities in Nigeria.  In an environment plagued with substandard and counterfeit products, we prioritize quality by operating an end-to-end traceable supply chain offering our clients visibility over their supply chain.
                                </li>
                                <li>We focus on building strong, diverse teams built from different backgrounds, experiences & identities.
                                </li>
                            </ul>
                        </div>
                        <h6>Job Description</h6>
                        <p>DrugStoc is looking for a <strong>Passionate Sales Associate</strong> who wants to change the current
                            status quo with healthcare in Sub Saharan Africa. S/he should have proven experience in
                            sale of diagnostics to help scale to its next stage of growth and expansion. Your central goal
                            is to identify new opportunities for marketing the products which translates to increased
                            revenue for the organization.
                        </p>
                        <h6>What You Get To Do
                        </h6>
                        <ul>
                            <li>Develop account profiles and execute the sales plan.
                            </li>
                            <li>Act as a consultant to high-level customers in terms of planning their present and
                                future demands.</li>
                            <li>Educate customers on all new products and services</li>
                            <li>Forecast sales, develop -out of the box- sales strategies/models and evaluate their
                                effectiveness.</li>
                            <li>Build productive and long-lasting relationships.</li>
                            <li>Achieve sales targets.</li>
                            <li>Research accounts and generate sales for pharmaceutical
                                products/solutions/services.</li>
                            <li>Attend meeting, sales events and trainings to keep abreast of the latest developments
                            </li>
                            <li>Report and provide feedback to management using financial statistical data.</li>
                            <li>Maintain and expand client database within your assigned territor</li>
                            <li>Any other duties as may be assigned from time to time.</li>
                        </ul>
                        <h6>What It Takes To Succeed</h6>
                        <ul>
                            <li>Proven work experience as a Pharmaceutical or FMCG Sales Representative.</li>
                            <li>Excellent knowledge of MS Office</li>
                            <li>Highly motivated and target driven with a proven track record in sales.</li>
                            <li>Excellent selling, communication, and negotiation skills.</li>
                            <li>Ability to create and deliver presentations tailored to the audience needs.</li>
                            <li>Relationship management skills and openness to feedback</li>
                            <li>OND, HND, BSc degree or equivalent</li>
                            <li>Must be resident in Ibadan city.</li>
                            <li>Decision making skills</li>
                            <li>Collaborative skills</li>
                            <li>Highly organized and detail oriented</li>
                            <li>Multi-tasking and time-management skills, with the ability to prioritize tasks</li>
                            <li>A "change the world" mindset and a can-do attitude.</li>
                        </ul>

                        <h6>Bonus Points</h6>
                        <ul>
                            <li>Experience working in Pharmaceutical industry.</li>
                            <li>Knowledge of sales techniques as well as a dexterity in "reading" the market</li>
                        </ul>

                    </div>
                </div>
            </Container>
        </>
    )
};

const Container = styled.div`
    margin: 150px 0;
    h4{
        margin: 30px 0;
    }
    h6{
        margin-top: 30px;
        font-size: 24px ;
        font-weight:bold;
    }
    li{
        margin-top: 10px;
        margin-left:40px ;
    }
`; 