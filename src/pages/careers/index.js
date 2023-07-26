import Link from 'next/link';
import styled from 'styled-components';
import AppCard from 'components/app-card';
import { Button, Table } from 'react-bootstrap';
import { jobs } from './data';
import CareerMetadata from 'components/meta/career';
import { useRouter } from 'next/router';

const Careers = () => {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  const handleMailClick = (path) => {
    router.push(path)
  }

  return (
    <div>
      <CareerMetadata />
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>
                Let your ideas be heard, let us actuate Africa’s <br />
                potential together
              </h1>
              <p>
                Join a team that will unlock the well being of Africans, in our
                lifetime. <br />
              </p>
              <p></p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1684431969/banner_jiwfet.png"
            alt="Picture of the author"
            loading="eager"
            className="banner d-lg-block d-none"
          />
        </div>
        <img
          src="https://res.cloudinary.com/bizstak/image/upload/v1684239802/banner-dots_stl7x6.png"
          alt="Banner dots"
          aria-hidden="true"
          className="header__banner-dots-right d-lg-block d-none"
        />
      </Header>
      <TeamSection>
        <div className="container">
          <h2 className="blue">
            Together we will solve some <br />
            of the biggest challenges <br />
            in healthcare.
          </h2>

          <h5 className="mt-5 pt-5">
            So let's see where you fit in.
            <br /> Discover why the brightest minds find home in working with
            us.
          </h5>

          <Link href="#open-positions" passHref>
            <button className="btn btn-drug-stoc m-auto d-block">APPLY</button>
          </Link>
          <img src="https://res.cloudinary.com/bizstak/image/upload/v1684242847/Image-5_hmnvh4.png" alt="group photo for drugstoc" className="banner" />
        </div>
      </TeamSection>
      {/* <CoreValueSection /> */}
      <BenefitSection>
        <div className="container">
          <h2>Benefits of working with us</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/1.svg" alt="icon of a hand raising or suspending a heart in pulse" />
                  <h4>Health insurance</h4>
                  <p>
                    Our comprehensive medical insurance covers you and your
                    family
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/2.svg" alt="icon of an aircraft taking off" />
                  <h4>Traction and scale</h4>
                  <p>
                    Your opportunity to impact products, connect with customers,
                    and help us scale is massive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/3.svg" alt="icon of an open wallet" />
                  <h4>Young Family Friendly </h4>
                  <p>We offer flexible working hours for new parents.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/4.svg" alt="icon of a pie chart" />
                  <h4>Learning and development</h4>
                  <p>
                    With the fast pace of our environment, you're sure to
                    acquire new skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/5.svg" alt="icon of a hand raising or suspending two hearts" />
                  <h4>Do what you love</h4>
                  <p>
                    Life is too short to work without purpose. Lets change
                    Africa's narrative together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/6.svg" alt="icon of people in group" />
                  <h4>Smart collegues</h4>
                  <p>
                    Challenge yourself by exchanging ideas with the brightest
                    minds in Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BenefitSection>
      <OpenPositions id="open-positions">
        <div className="container" style={{ textAlign: 'left', marginBottom: -100, backgroundColor: '#fff' }}>
          <h2 style={{ marginBottom: '50px' }}>
            {' '}
            Available Vacancies <br />{' '}
          </h2>

          <Table striped responsive>
            <thead>
              <tr>
                <th>Job Position</th>
                <th>Role</th>
                <th>Type</th>
                <th>Location</th>
                <th className='text-center'><Button variant="outline-primary" onClick={() => handleButtonClick('/jobs')}>View</Button></th>
                <th className='text-center'><Button variant="outline-primary" href="mailto:careers@drugstoc.com">Apply</Button></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.name}>
                  <td style={{ fontWeight: 600 }}>
                    {/* <Link href="/jobpage">
                      <a target="_blank" rel="noopener noreferrer"> */}
                    {job.name}
                    {/* </a>
                    </Link> */}
                    {/* <a target="_blank" rel='noopener noreferrer' href="/jobpage">
                      {job.name}
                    </a> */}
                  </td>
                  <td>{job.role}</td>
                  <td>{job.type}</td>
                  <td>{job.location}</td>
                  <td>
                    {' '}
                    <Link href={job.link}>
                      <a target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-drug-stoc m-auto d-block">
                          VIEW{' '}
                        </button>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Button onClick={() => handleMailClick(`mailto:careers@drugstoc.com?subject=${encodeURIComponent(job.subjectText)}`)} className="btn btn-drug-stoc m-auto d-block">
                      APPLY
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </OpenPositions >
      <AppCard />
    </div >
  );
};

const Header = styled.header`
  height: 710px;
  display: flex;
  align-items: center;
  position: relative;
  background: #f5f9f9;
  @media (max-width: 992px) {
    height: 600px;
    display: block;
    padding: 8rem 0 0;
  }

  h1 {
    font-family: var(--font-primary);
    font-weight: bold;
    color: var(--text-black);
    font-size: calc(var(--font-h1) + 2px);
    line-height: 1.4;
    margin-bottom: 1.8rem;

    span {
      color: var(--primary-green);
    }
  }
  h5 {
    font-family: var(--font-primary);
    font-size: calc(var(--font-h4) + 1px);
    color: #272d4e;
    line-height: 32px;
    margin-bottom: 15px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-h5);
    color: var(--text-black);
    line-height: 1.7;
  }
  .banner {
    width: 47%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    max-width: 50%;

    height: calc(100% - 81px);

    object-fit: cover;
  }

  button {
    margin-top: 1.2rem;
    padding: 13px 35px;
    font-weight: 500;
  }

  .iso-section {
    width: 95%;
    margin-top: 3.1rem;
  }

  .header__banner-dots {
    &-right {
      right: 70px;
      position: absolute;
      height: 251px;
      top: 212px;
    }
  }
`;

const TeamSection = styled.section`
  margin: 8rem 0;
  @media (max-width: 992px) {
    margin-top: 4rem 0;
    br {
      display: none;
    }
  }
  a.text-center {
    color: var(--primary-blue);
  }
  .banner {
    margin: auto;
    display: block;
    margin-top: 5rem;
    width: 90%;
  }
  @media (max-width: 992px) {
    h2.blue::before {
      margin-left: -1.3rem !important;
      top: -5rem !important;
    }
    h2.blue::after {
      right: 10px !important;
      top: 7rem !important;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    text-align: center;
    color: #000;
    &.blue {
      color: #4b70d6;
      position: relative;
      &:after,
      &:before {
        content: '';
        width: 81px;
        height: 67px;
        position: absolute;
        background-size: 80px;
        opacity: 0.2;
      }
      &:after {
        background-image: url("data:image/svg+xml,%0A%3Csvg width='82' height='68' viewBox='0 0 82 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.863022 57.4443C12.9574 51.5799 19.0045 44.6893 19.0045 36.7724C13.8495 36.1859 9.58678 34.109 6.21622 30.5415C2.84567 26.9739 1.16042 22.8445 1.16042 18.153C1.16042 13.1682 2.7961 8.96542 6.06753 5.54451C9.33895 2.1236 13.453 0.413177 18.4097 0.413177C23.9612 0.413177 28.7691 2.63673 32.8336 7.08392C36.8981 11.5311 38.9303 16.9312 38.9303 23.2843C38.9303 42.3436 28.1249 57.2488 6.51363 68.0002L0.863022 57.4443ZM43.5445 57.4443C55.738 51.5799 61.8347 44.6893 61.8347 36.7724C56.5806 36.1859 52.2683 34.109 48.8977 30.5415C45.5272 26.9739 43.8419 22.8445 43.8419 18.153C43.8419 13.1682 45.5024 8.96542 48.8234 5.54451C52.1444 2.1236 56.2832 0.413177 61.2399 0.413177C66.7914 0.413177 71.5745 2.63673 75.5895 7.08392C79.6044 11.5311 81.6118 16.9312 81.6118 23.2843C81.6118 42.3436 70.8559 57.2488 49.3438 68.0002L43.5445 57.4443Z' fill='%232F80ED'/%3E%3C/svg%3E%0A");

        margin-left: 2rem;
        margin-top: 1rem;
      }
      &:before {
        margin-left: -6rem;
        top: -3rem;
        background-image: url("data:image/svg+xml,%0A%3Csvg width='82' height='68' viewBox='0 0 82 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M81.137 57.0313C69.0426 51.1668 62.9955 44.2763 62.9955 36.3593C68.1505 35.7729 72.4132 33.6959 75.7838 30.1284C79.1543 26.5609 80.8396 22.4314 80.8396 17.7399C80.8396 12.7551 79.2039 8.55234 75.9325 5.13143C72.661 1.71052 68.547 9.15527e-05 63.5903 9.15527e-05C58.0388 9.15527e-05 53.2309 2.22365 49.1664 6.67083C45.1019 11.118 43.0697 16.5181 43.0697 22.8712C43.0697 41.9306 53.8751 56.8357 75.4864 67.5872L81.137 57.0313ZM38.4555 57.0313C26.262 51.1668 20.1653 44.2763 20.1653 36.3593C25.4194 35.7729 29.7317 33.6959 33.1023 30.1284C36.4728 26.5609 38.1581 22.4314 38.1581 17.7399C38.1581 12.7551 36.4976 8.55234 33.1766 5.13143C29.8556 1.71052 25.7168 9.15527e-05 20.7601 9.15527e-05C15.2086 9.15527e-05 10.4255 2.22365 6.41055 6.67083C2.39562 11.118 0.388184 16.5181 0.388184 22.8712C0.388184 41.9306 11.1441 56.8357 32.6562 67.5872L38.4555 57.0313Z' fill='%232F80ED'/%3E%3C/svg%3E%0A");
      }
    }
  }
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 3px);
    line-height: 1.7;
    /* or 32px */
    text-align: center;
    color: var(--text-black);
    margin-bottom: 3rem;
  }
  .team__card,
  .investor__card {
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: calc(var(--font-p) + 2px);
      /* or 32px */
      text-align: center;
      color: var(--text-black);
      margin-bottom: 0.3rem;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 0px);
      /* or 32px */
      text-align: center;
      color: var(--text-black);
      margin-bottom: 3rem;
    }

    img {
      height: 120px;
      width: 120px;
      display: block;
      margin: auto;
      margin-bottom: 1.2rem;
      @media (max-width: 992px) {
        height: 100px;
        width: 100px;
      }
    }
  }

  .investor__card {
    img {
      height: 53px;
      width: 100%;
      display: block;
      margin: auto;
      margin-bottom: 4rem;
    }
  }
`;

export const BenefitSection = styled.section`
  background: #2c4da7;
  padding: 8rem 0;
  @media (max-width: 992px) {
    padding: 4rem 0;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    text-align: center;
    color: #fff;
    margin-bottom: 4rem;
  }
  .col-lg-4 {
    margin-bottom: 2.5rem;
  }
  .card {
    background: #ffffff;
    border-radius: 10px;
    border: none;
    height: 100%;
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: calc(var(--font-h5) + 3px);
      /* or 32px */

      font-family: var(--font-primary);
      color: var(--text-black);
      margin-bottom: 0.3rem;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-h5) - 1px);
      /* or 32px */
      color: var(--text-black);
      margin-bottom: 2rem;
      margin-top: 1rem;
    }
    img {
      margin: 2rem 0;
      width: 50px;
    }
  }
`;

const OpenPositions = styled.section`
  padding: 6rem 0;
  @media (max-width: 992px) {
    padding: 4rem 0;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    text-align: center;
    color: #000;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-h5) + 0px);
    /* or 32px */
    text-align: center;
    color: #484848;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  table.table {
    thead th,
    tbody td {
      border: none;
    }
    td {
      color: #7c7c7c;
      font-size: calc(var(--font-h5) - 1px);
      a {
        color: #2c4da7;
      }
    }
  }
  table.table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f4f4f4;
  }
  input,
  select {
    padding-left: 22px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 1px;
    font-size: calc(var(--font-h5) - 1px);
    color: rgba(63, 65, 78, 0.9);
    min-height: 46px;
    margin-bottom: 1rem;
  }
`;
export default Careers;
