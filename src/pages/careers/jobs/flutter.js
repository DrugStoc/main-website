import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Flutter() {
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
              We are seeking a talented and passionate Flutter Mobile Developer
              to join our development team. The developer will be responsible
              for the development and maintenance of applications aimed at a
              wide range of audiences. Their primary focus is on developing
              user-friendly apps that are compatible with multiple platforms,
              including iOS and Android.
            </p>
          <h6>Responsibilities</h6>
          <ul>
            <li>
              Design and build sophisticated and highly scalable apps using
              Flutter.
            </li>
            <li>
              Build custom packages in Flutter using the functionalities and
              APIs already available in native Android and IOS.
            </li>
            <li>
              Translate and build the designs and Wireframes into high-quality
              responsive UI code
            </li>
            <li>
              Explore feasible architectures for implementing new features.
            </li>
            <li>
              Resolve any problems existing in the system and suggest and add
              new features to the complete system.
            </li>
            <li>Suggest space and time efficient Data Structures.</li>
            <li>
              Follow the best practices while developing the app and keep
              everything structured and well documented.
            </li>
            <li>Use CI/CD for smooth deployment.</li>
            <li>Document the project and code efficiently.</li>
            <li>
              Manage the code and project on Git to keep in sync with other team
              members and managers.
            </li>
            <li>
              Ensure security guidelines are always followed while developing
              the app.
            </li>
            <li>
              Consulting with our customer-facing representatives about software
              system design and maintenance.
            </li>
            <li>Perform time profiling and memory leak assessment.</li>
            <li>Write tests for the App.</li>
          </ul>
          <h6>Qualifications</h6>
          <ul>
            <li>
              Have two or more iOS/Android apps developed with Flutter. Either
              deployed on the AppStore/Google Play or available on GitHub.
            </li>
            <li>3+ years in mobile software development.</li>
            <li>Experience with third-party libraries and APIs.</li>
            <li>Understanding of the Agile development life cycle.</li>
            <li>Experience with automated testing and building.</li>
            <li>
              Experience with Git, Jenkins, or other version control tools.
            </li>
            <li>
              Ability to write readable code, create extensive documentation for
              existing code, and refactor the previously written code into a
              readable state.
            </li>
            <li>Intermediate+ English skills.</li>
            <li>Creative and efficient problem solve.</li>
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
          <p style={{ display: pathname === '/jobpage' ? 'none' : undefined }}>
            If you are a dedicated and skilled Mobile Developer looking to make
            a significant impact in a forward-thinking company, we encourage you
            to apply and be part of our dynamic team. Join us in shaping the
            future of DrugStoc through cutting-edge web applications and user
            interfaces.
          </p>
          </div>
        </div>
      </Container>
    </>
  );
}
