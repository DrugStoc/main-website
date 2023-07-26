import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function qa() {
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
                        <h6>Job Position: Executive Assistant to the Executive Office</h6>
                        <p>
                            Overview: We are seeking an experienced and detail-oriented Executive Assistant to support
                            the daily operations of our Executive Office. The ideal candidate will have exceptional
                            communication and organizational skills, the ability to multitask, and experience in managing
                            executive calendars, travel, and other administrative tasks.
                        </p>
                        <p>What you benefit: Front seat to a fast paced and rapidly growing tech enabled pharmatech
                            company focused on impacting lives of everyday Sub-Saharan Africans.</p>
                        <h6>Responsibilities</h6>
                        <ul>
                            <li>
                                Manage the Executive Office's daily calendar, including scheduling and prioritizing
                                appointments, meetings, and events
                            </li>
                            <li>
                                Organize and coordinate travel arrangements for the Executive Office, including
                                flight bookings, hotel accommodations, and ground transportation
                            </li>
                            <li>
                                Serve as a liaison between the Executive Office and other departments, external
                                partners, and stakeholders
                            </li>
                            <li>
                                Handle confidential and sensitive information with discretion and professionalism
                            </li>
                            <li>
                                Prepare and edit correspondence, reports, and presentations for various complex
                                ideas and prepare visual and written interpretations for business projects

                            </li>
                            <li>
                                Take minutes of Management meetings
                            </li>
                            <li>
                                Conduct research and provide analysis to support the Executive Office's decision-making process
                            </li>
                            <li>
                                Manage communication with stakeholders front the CEO's offic
                            </li>
                            <li>
                                Track progress of detailed project plans
                            </li>
                            <li>
                                Plan and execute special projects and events, as may be needed
                            </li>
                            <li>
                                Manage and maintain office supplies and equipment for the office of the Executive
                            </li>
                            <li>Assist with other administrative tasks, as needed</li>
                        </ul>
                        <h6>Qualifications:</h6>
                        <ul>
                            <li>
                                First class Bachelor's degree in Finance, Economics, or any related field
                            </li>
                            <li>1+ year of experience as an Executive Assistant or an analyst</li>
                            <li>Strong organizational and time-management skills, with the ability to prioritize tasks
                                and manage multiple deadlines</li>
                            <li>Excellent communication and interpersonal skills, with the ability to interact with
                                individuals at all levels in the organization</li>
                            <li>Proficient in Microsoft Office Suite (Word, Excel, PowerPoint, and Outlook)
                            </li>
                            <li>Ability to handle confidential information with discretion and professionalism</li>
                            <li>Demonstrated ability to work independently, take initiative, and exercise good
                                judgment</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
  margin: 150px 0;
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
