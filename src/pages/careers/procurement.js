import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function procurement() {
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
                            <p>
                                DrugStoc is a tech-enabled pharmaceutical access and distribution
                                platform that connects manufacturers of pharmaceutical products to
                                health care providers in sub-Saharan Africa. Founded in 2016, Our
                                clients are hospitals, pharmacies, clinics, and nursing homes. We
                                are an omnichannel platform that removes any barrier for Licensed
                                health workers to find and purchase genuine medication at the
                                right price for their patients.
                            </p>
                            <h6> What You Can Look Forward To</h6>
                            <ul>
                                <li>
                                    By 2025, DrugStoc's goal is to become the largest last mile
                                    distributor of health commodities in Nigeria. In an environment
                                    plagued with substandard and counterfeit products, we prioritize
                                    quality by operating an end-to-end traceable supply chain
                                    offering our clients visibility over their supply chain.
                                </li>
                                <li>
                                    We focus on building strong, diverse teams built from different
                                    backgrounds, experiences & identities.
                                </li>
                            </ul>
                        </div>
                        <h6>Job Description</h6>
                        <p>
                            {' '}
                            DrugStoc is looking cfor a{' '}
                            <strong>Passionate Quality Assurance Associate</strong> who wants
                            to change the current status quo with healthcare in Sub Saharan
                            Africa. S/he should have proven experience in procurement to help
                            scale to its next stage of growth and expansion. Your central goal
                            is to ensure stock optimization, as well as provide guidance on
                            sourcing and procurement processes. Our procurement manager will
                            be a supply chain expert who will specialize in implementing
                            cost-effective purchases of pharmaceutical products, as required
                            by the company. Ensuring quality control and adhering to the
                            company's policies and procedures on supply chain management will
                            be some of your main priorities when carrying out this role.
                        </p>
                        <h6>What You Get To Do</h6>
                        <ul>
                            <li>
                                Supplier Management in line with international best practice
                            </li>
                            <li>
                                Organizing pharmaceutical procurement as part of supply chain
                            </li>
                            <li>
                                Building and maintaining long-term relationships with vendors
                                and suppliers
                            </li>
                            <li>
                                Finalizing purchase orders, organizing and confirming delivery
                                of pharmaceutical goods and services.
                            </li>
                        </ul>
                        <h6>What It Takes To Succeed</h6>
                        <ul>
                            <li>
                                A minimum of 4 years' experience in a procurement role in pharma
                                industry.
                            </li>
                            <li>In-depth knowledge of supply chain business</li>
                            <li>Highly creative with excellent analytical abilities.</li>
                            <li>Outstanding communication and interpersonal skills.</li>
                            <li>Curiosity about supply chain trends</li>
                            <li>Bachelor's degree in Pharmacy, Pharmacology.</li>
                            <li>In-depth knowledge of negotiation skills</li>
                            <li>Decision making skills</li>
                            <li>Collaborative skills</li>
                            <li>Highly organized and detail oriented</li>
                            <li>Management and leadership skills.</li>
                            <li>
                                Multi-tasking and time-management skills, with the ability to
                                prioritize tasks
                            </li>
                            <li>A "change the world" mindset and a can do attitude</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}
