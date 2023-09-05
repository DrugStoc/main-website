import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function React() {
  const { pathname } = useRouter();

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
            <div
              style={{ display: pathname === '/jobpage' ? 'none' : undefined }}
            >
              <h1>Company Overview</h1>
              <p>
                DrugStoc is a dynamic and innovative technology company that
                specializes in supply chain innovation, financial solutions, and
                product knowledge to unlock access to medications in emerging
                Economies. We are dedicated to creating cutting-edge solutions
                that redefine user experiences and drive business growth. As a
                React/Next.js Frontend Developer at DrugStoc, you will play a
                pivotal role in shaping our web applications and interfaces,
                contributing to our mission of delivering high-quality,
                user-centric products.
              </p>
            </div>
            <h6>Position Overview</h6>
            <p>
              We are seeking a talented and passionate React/Next.js Frontend
              Developer to join our development team. You will collaborate
              closely with our cross-functional teams, including designers,
              backend developers, and product managers, to build exceptional web
              applications that align with our company's vision and goals. As a
              front-end developer, you will have the opportunity to influence
              the user interface design, optimize application performance, and
              contribute to the overall technical architecture.
            </p>
            <h6>Responsibilities</h6>
            <ul>
              <li>Designing and building web applications using Laravel.</li>
              <li>
                Troubleshooting issues in the implementation and debug projects.
              </li>
              <li>
                Working with front-end and back-end developers on projects.
              </li>
              <li>
                Build innovative, state-of-the-art applications and collaborate
                with the User Experience (UX) team.
              </li>
              <li>
                Ensure HTML, CSS, and shared JavaScript are valid and consistent
                across applications.
              </li>
              <li>
                Prepare and maintain all applications utilizing standard
                development tools.
              </li>
              <li>
                Lead the entire web application development life cycle right
                from the concept stage to delivery and post-launch support.
              </li>
              <li>
                Convey effectively with all task progress, evaluations,
                suggestions, and schedules along with technical and process
                issues.
              </li>
              <li>
                Document the development process, architecture, and standard
                components.
              </li>
              <li>
                Coordinate with co-developers and keep project manager well
                informed of the status of development effort and serve as
                liaison between development staff and project manager.
              </li>
              <li>
                Discussing project aims with the client and development team.
              </li>
            </ul>
            <h6>Qualifications</h6>
            <ul>
              <li>
                Experience working with PHP, performing unit testing, and
                managing APIs such as REST.
              </li>
              <li>
                A solid understanding of application design using Laravel.
              </li>
              <li>Knowledge of database design and querying using SQL.</li>
              <li>Proficiency in HTML and JavaScript.</li>
              <li>Practical experience using the MVC architecture.</li>
              <li>A portfolio of applications and programs to your name.</li>
              <li>Problem-solving skills and critical mindset.</li>
              <li>Great communication skills.</li>
              <li>The desire and ability to learn.</li>
              <li>Creative and efficient problem solver.</li>
            </ul>
            <h6>Why Drugstoc</h6>
            <ul>
              <li>
                Opportunity to work on exciting and innovative projects that
                impact the health sector.
              </li>
              <li>
                Collaborative and inclusive work environment that values your
                ideas and contributions.
              </li>
              <li>
                Professional growth and development opportunities, including
                attending conferences, workshops, and training.
              </li>
              <li>Competitive salary and benefits package.</li>
            </ul>
            <p
              style={{ display: pathname === '/jobpage' ? 'none' : undefined }}
            >
              If you are a dedicated and skilled Mobile Developer looking to
              make a significant impact in a forward-thinking company, we
              encourage you to apply and be part of our dynamic team. Join us in
              shaping the future of DrugStoc through cutting-edge web
              applications and user interfaces.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
