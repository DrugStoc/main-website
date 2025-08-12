import Link from 'next/link';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import NavLink from 'components/nav-link';
import useScroll from 'utils/use-scroll';
import { useEffect, useState } from 'react';

const NavbarLayout = () => {
  const router = useRouter();
  const [isLearningRoute, setIsLearningRoute] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (router.isReady) {
      const currentPath = router.asPath;
      if (isMounted) {
        setIsLearningRoute(currentPath.includes('/learning'));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [router.isReady, router.asPath]);

  const isStaticBg = ['/about', '/careers'].includes(router.pathname);
  const [userScrolledUp] = useScroll(10);
  const [expand, setExpand] = useState(false);
  const style =
    userScrolledUp || isStaticBg
      ? {
          borderBottom: '1px solid #ececec',
          backdropFilter: 'saturate(3.5) blur(14px)',
          background: '#fff',
          boxShadow: '1px 0px 10px #00000008',
          zIndex: '100000',
        }
      : {};
  return (
    <div>
      <NavbarWrapper
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="light"
        style={style}
        className={expand ? 'toggleExpand' : ''}
        onToggle={expanded => setExpand(expanded)}
      >
        <Container fluid>
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="/DSLogo.png"
                width={100}
                height={20}
                alt="drugstoc logo"
              />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink activeClassName="active" href="/about">
                <a className="nav-link">About Us</a>
              </NavLink>
              <NavDropdown
                title="Solutions"
                id="collasible-nav-dropdown"
                className="nav-drop-wrapper"
              >
                <div className="d-block d-lg-none">
                  <NavDropdown.Item
                    href="/procure-direct"
                    as={NavLink}
                    passHref
                    activeClassName="active"
                  >
                    <a className="nav-link">Procure Direct</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/drugstocpay"
                    as={NavLink}
                    passHref
                    activeClassName="active"
                  >
                    <a className="nav-link">DrugStoc Pay</a>
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/market-access"
                    as={NavLink}
                    passHref
                    activeClassName="active"
                  >
                    <a className="nav-link">Market Access</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/rx-insight"
                    as={NavLink}
                    passHref
                    activeClassName="active"
                  >
                    <a className="nav-link">RXInsights</a>
                  </NavDropdown.Item>
                </div>

                <div className="drop-card d-lg-block d-none">
                  <div className="d-flex">
                    <div className="card-body">
                      <h3 className=" mb-3">For Healthcare Providers</h3>
                      <NavDropdown.Item
                        href="/procure-direct"
                        as={NavLink}
                        passHref
                        activeClassName="active"
                      >
                        <a className="nav-link nav-drop-wrap">
                          <div className="d-flex">
                            <img src="/images/navbar/3.svg" alt="wallet icon" />
                            <div className="flex-content">
                              <h4>Procure Direct</h4>
                              <p>Shop affordable medicine for your pharmacy</p>
                              <img
                                src="data:image/svg+xml,%0A%3Csvg width='23' height='15' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.864306 7.00773C0.376205 7.06269 0 7.40996 0 7.83016C0 8.28855 0.447715 8.66016 1 8.66016H19.8735L15.0047 13.5813L14.9253 13.6743C14.687 13.9989 14.7124 14.4602 15.0023 14.7556C15.3212 15.0805 15.8392 15.0816 16.1594 14.758L22.7594 8.08779L22.839 7.99454C23.0779 7.66897 23.0513 7.20608 22.7593 6.91106L16.1593 0.241932L16.0674 0.161737C15.7466 -0.0787468 15.2921 -0.0509548 15.0023 0.244461C14.6834 0.569419 14.6845 1.09515 15.0047 1.41871L20.5284 7.00016L1 7.00016L0.864306 7.00773Z' fill='%232C4DA7'/%3E%3C/svg%3E%0A"
                                alt="arrow right"
                              />
                            </div>
                          </div>
                        </a>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/drugstocpay"
                        as={NavLink}
                        passHref
                        activeClassName="active"
                      >
                        <a className="nav-link nav-drop-wrap">
                          <div className="d-flex">
                            <img src="/images/navbar/4.svg" alt="wallet icon" />
                            <div className="flex-content">
                              <h4>DrugStoc Pay</h4>
                              <p>
                                Non collateral loans for healthcare Providers
                              </p>
                              <img
                                src="data:image/svg+xml,%0A%3Csvg width='23' height='15' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.864306 7.00773C0.376205 7.06269 0 7.40996 0 7.83016C0 8.28855 0.447715 8.66016 1 8.66016H19.8735L15.0047 13.5813L14.9253 13.6743C14.687 13.9989 14.7124 14.4602 15.0023 14.7556C15.3212 15.0805 15.8392 15.0816 16.1594 14.758L22.7594 8.08779L22.839 7.99454C23.0779 7.66897 23.0513 7.20608 22.7593 6.91106L16.1593 0.241932L16.0674 0.161737C15.7466 -0.0787468 15.2921 -0.0509548 15.0023 0.244461C14.6834 0.569419 14.6845 1.09515 15.0047 1.41871L20.5284 7.00016L1 7.00016L0.864306 7.00773Z' fill='%232C4DA7'/%3E%3C/svg%3E%0A"
                                alt="arrow right"
                              />
                            </div>
                          </div>
                        </a>
                      </NavDropdown.Item>
                      <h3 className="mt-4 mb-3">
                        For Pharmaceutical Companies
                      </h3>
                      <NavDropdown.Item
                        href="/market-access"
                        as={NavLink}
                        passHref
                        activeClassName="active"
                      >
                        <a className="nav-link nav-drop-wrap">
                          <div className="d-flex">
                            <img src="/images/navbar/5.svg" alt="wallet icon" />
                            <div className="flex-content">
                              <h4>MarketAccess</h4>
                              <p>Shop affordable medicine for your pharmacy</p>
                              <img
                                src="data:image/svg+xml,%0A%3Csvg width='23' height='15' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.864306 7.00773C0.376205 7.06269 0 7.40996 0 7.83016C0 8.28855 0.447715 8.66016 1 8.66016H19.8735L15.0047 13.5813L14.9253 13.6743C14.687 13.9989 14.7124 14.4602 15.0023 14.7556C15.3212 15.0805 15.8392 15.0816 16.1594 14.758L22.7594 8.08779L22.839 7.99454C23.0779 7.66897 23.0513 7.20608 22.7593 6.91106L16.1593 0.241932L16.0674 0.161737C15.7466 -0.0787468 15.2921 -0.0509548 15.0023 0.244461C14.6834 0.569419 14.6845 1.09515 15.0047 1.41871L20.5284 7.00016L1 7.00016L0.864306 7.00773Z' fill='%232C4DA7'/%3E%3C/svg%3E%0A"
                                alt="arrow right"
                              />
                            </div>
                          </div>
                        </a>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/rx-insight"
                        as={NavLink}
                        passHref
                        activeClassName="active"
                      >
                        <a className="nav-link nav-drop-wrap">
                          <div className="d-flex">
                            <img src="/images/navbar/8.svg" alt="chart icon" />
                            <div className="flex-content">
                              <h4>RXInsight</h4>
                              <p>
                                Data-driven market insights for pharma supply
                                chain
                              </p>
                              <img
                                src="data:image/svg+xml,%0A%3Csvg width='23' height='15' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.864306 7.00773C0.376205 7.06269 0 7.40996 0 7.83016C0 8.28855 0.447715 8.66016 1 8.66016H19.8735L15.0047 13.5813L14.9253 13.6743C14.687 13.9989 14.7124 14.4602 15.0023 14.7556C15.3212 15.0805 15.8392 15.0816 16.1594 14.758L22.7594 8.08779L22.839 7.99454C23.0779 7.66897 23.0513 7.20608 22.7593 6.91106L16.1593 0.241932L16.0674 0.161737C15.7466 -0.0787468 15.2921 -0.0509548 15.0023 0.244461C14.6834 0.569419 14.6845 1.09515 15.0047 1.41871L20.5284 7.00016L1 7.00016L0.864306 7.00773Z' fill='%232C4DA7'/%3E%3C/svg%3E%0A"
                                alt="arrow right"
                              />
                            </div>
                          </div>
                        </a>
                      </NavDropdown.Item>
                    </div>
                    <div className="card-body right-card">
                      <h4>BY CLIENT CATEGORY</h4>

                      <Link href="/procure-direct">
                        <a rel="noreferrer" className="nav-link_">
                          Chain Pharmacies
                        </a>
                      </Link>

                      <Link href="/procure-direct">
                        <a rel="noreferrer" className="nav-link_">
                          Community Pharmacies
                        </a>
                      </Link>

                      <Link href="/procure-direct">
                        <a rel="noreferrer" className="nav-link_">
                          Retail Pharmacies
                        </a>
                      </Link>

                      <Link href="/procure-direct">
                        <a rel="noreferrer" className="nav-link_">
                          For Hospitals & Clinics
                        </a>
                      </Link>

                      <Link href="/procure-direct">
                        <a rel="noreferrer" className="nav-link_">
                          For Licensed Medical Professionals
                        </a>
                      </Link>

                      <Link href="/partnerships">
                        <a rel="noreferrer" className="nav-link_">
                          For HMOs
                        </a>
                      </Link>

                      <Link href="/partnerships">
                        <a rel="noreferrer" className="nav-link_">
                          For Government Facilities
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              <NavLink activeClassName="active" href="/partnerships">
                <a className="nav-link">Partnerships</a>
              </NavLink>
              <NavLink activeClassName="active" href="/careers">
                <a className="nav-link">Careers</a>
              </NavLink>

              <NavLink
                activeClassName="active"
                href="https://blog.drugstoc.com"
              >
                <a className="nav-link">Blog</a>
              </NavLink>
              <NavLink activeClassName="active" href="/learning">
                <a className="nav-link">
                  <span style={{ color: isLearningRoute ? '#4c70d6' : '' }}>
                    Learning
                  </span>
                </a>
              </NavLink>
            </Nav>
            <Nav className="ml-auto">
            
              <Dropdown>
  <Dropdown.Toggle className="toggle_blue">
    <span className="nav-link nav-button">SHOP ON WEB</span>
  </Dropdown.Toggle>

  <Dropdown.Menu className="qr-dropdown">
    <div className="text-center p-3">
      <h5>Scan to download our app</h5>
      <a 
        href="https://drugstoc.com/app-download" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="/app-qr-code.png" 
          alt="DrugStoc App QR Code" 
          width="150" 
          height="150"
          className="my-2"
        />
      </a>
      <p className="small text-muted mb-2">Scan with your phone camera</p>
      <div className="d-flex justify-content-center gap-3">
        <a 
          href="https://play.google.com/store/apps/details?id=com.drugstoc.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
        >
          Android
        </a>
        <a 
          href="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
        >
          iOS
        </a>
      </div>
    </div>
  </Dropdown.Menu>
</Dropdown>

              <Dropdown>
                <Dropdown.Toggle className="toggle_blue">
                  <span className="nav-link nav-button nav-button-outline">
                    Contact Sales
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="tel:01-7005571" className="nav-link">
                    <img
                      src="data:image/svg+xml,%0A%3Csvg width='63' height='63' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.2359 0.261284L14.147 0.255392C10.0318 0.0639322 4.22468 5.01198 2.07892 8.59082C-0.275446 11.8067 -0.320712 16.0773 1.73529 21.0172L2.05942 21.7631C7.47704 35.1054 27.8063 55.4091 41.0964 60.9679C46.1814 63.3468 50.7135 63.3903 54.2842 60.819C57.4237 59.0243 62.5723 53.0526 62.4234 48.8113C62.2821 47.0664 61.4709 45.6419 60.2109 44.3452L59.9035 44.0396L59.0476 43.2482C55.9481 40.4766 50.582 36.5307 48.9222 36.1819C46.9734 35.7756 45.652 36.1393 43.5676 37.2886L42.7914 37.73C41.3092 38.5847 40.7791 38.7309 40.077 38.4747C32.6617 35.4305 27.4327 30.1753 24.3685 22.6373C24.1693 22.0788 24.2678 21.591 24.9123 20.4084L25.2519 19.8054C26.6567 17.3517 27.1277 15.9647 26.6852 13.8288L26.6071 13.552C25.8812 11.4388 21.4326 5.47669 18.9625 2.8811L18.5645 2.47851C17.2772 1.21424 15.8617 0.401247 14.2359 0.261284ZM13.8902 4.82458L14.0597 4.85713C14.3563 4.94084 14.706 5.14621 15.0998 5.48461L15.3866 5.74691L15.928 6.31685C18.0282 8.6357 22.097 14.1041 22.2315 14.758C22.3587 15.3718 22.2181 15.8848 21.5516 17.0939L21.203 17.7103C19.7355 20.2799 19.2812 21.9368 20.1245 24.2799C23.6844 33.0421 29.8113 39.1998 38.4415 42.7405C40.6673 43.5545 42.2452 43.2291 44.4807 42.0175L45.2466 41.585C46.7634 40.7079 47.3187 40.5174 47.9948 40.6584C48.6554 40.7972 54.5667 45.2339 56.7336 47.3188L56.9867 47.5702C57.5456 48.1459 57.8511 48.6825 57.8839 49.0805C57.914 50.011 56.9824 51.759 55.3375 53.6668C54.1665 55.0251 52.6461 56.4137 51.9868 56.8741L51.8292 56.976C49.6993 58.4962 47.0689 58.5615 43.5906 57.0794L42.9284 56.7833C30.9124 51.7554 12.0156 33.0247 6.55783 20.7124L6.2344 19.9514C4.54326 16.2109 4.40295 13.4762 5.61724 11.4866L5.86075 11.1222C7.26814 8.79179 11.5096 5.12129 13.6214 4.83875L13.8902 4.82458ZM39.0676 1.01141L39.3766 1.0249C51.6572 2.39564 61.3553 12.1341 62.7354 24.4792C62.8757 25.734 61.9777 26.8656 60.7295 27.0067C59.4814 27.1477 58.3559 26.2448 58.2156 24.99C57.0728 14.7681 49.0429 6.70472 38.8748 5.56977C37.6264 5.43043 36.7268 4.30008 36.8654 3.04504C36.9809 1.99919 37.7809 1.19679 38.7668 1.039L39.0676 1.01141ZM39.2539 11.8153L39.5608 11.8541C45.8369 13.084 50.7412 18.0148 51.9646 24.3246C52.2048 25.5641 51.4003 26.7646 50.1675 27.0062C48.9347 27.2478 47.7405 26.4389 47.5003 25.1995C46.6313 20.7176 43.1486 17.2161 38.6906 16.3425C37.4579 16.1009 36.6533 14.9003 36.8936 13.6609C37.0938 12.628 37.9565 11.8942 38.9519 11.818L39.2539 11.8153Z' fill='%23200E32'/%3E%3C/svg%3E%0A"
                      alt="phone icon"
                      aria-hidden="true"
                      width="20"
                      className="mr-2"
                    />{' '}
                    01-7005571
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://api.whatsapp.com/send?phone=+2348036879999"
                    className="nav-link"
                  >
                    <img
                      src="data:image/svg+xml,%0A%3Csvg width='74' height='74' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='74' height='74' rx='37' fill='%230DC143'/%3E%3Cpath d='M53.574 20.3676C49.6073 16.2843 44.124 14.0676 38.524 14.0676C26.624 14.0676 17.0573 23.751 17.174 35.5343C17.174 39.2676 18.224 42.8843 19.974 46.151L16.9407 57.2343L28.2573 54.3176C31.4073 56.0676 34.9073 56.8843 38.4073 56.8843C50.1907 56.8843 59.7573 47.201 59.7573 35.4176C59.7573 29.701 57.5407 24.3343 53.574 20.3676ZM38.524 53.2676C35.374 53.2676 32.224 52.451 29.5407 50.8176L28.8407 50.4676L22.074 52.2176L23.824 45.5676L23.3573 44.8676C18.224 36.5843 20.674 25.6176 29.074 20.4843C37.474 15.351 48.324 17.801 53.4573 26.201C58.5907 34.601 56.1407 45.451 47.7407 50.5843C45.0573 52.3343 41.7907 53.2676 38.524 53.2676ZM48.7907 40.3176L47.5073 39.7343C47.5073 39.7343 45.6407 38.9176 44.474 38.3343C44.3573 38.3343 44.2407 38.2176 44.124 38.2176C43.774 38.2176 43.5407 38.3343 43.3073 38.451C43.3073 38.451 43.1907 38.5676 41.5573 40.4343C41.4407 40.6676 41.2073 40.7843 40.974 40.7843H40.8573C40.7407 40.7843 40.5073 40.6676 40.3907 40.551L39.8073 40.3176C38.524 39.7343 37.3573 39.0343 36.424 38.101C36.1907 37.8676 35.8407 37.6343 35.6073 37.401C34.7907 36.5843 33.974 35.651 33.3907 34.601L33.274 34.3676C33.1573 34.251 33.1573 34.1343 33.0407 33.901C33.0407 33.6676 33.0407 33.4343 33.1573 33.3176C33.1573 33.3176 33.624 32.7343 33.974 32.3843C34.2073 32.151 34.324 31.801 34.5573 31.5676C34.7907 31.2176 34.9073 30.751 34.7907 30.401C34.674 29.8176 33.274 26.6676 32.924 25.9676C32.6907 25.6176 32.4573 25.501 32.1073 25.3843H31.7573C31.524 25.3843 31.174 25.3843 30.824 25.3843C30.5907 25.3843 30.3573 25.501 30.124 25.501L30.0073 25.6176C29.774 25.7343 29.5407 25.9676 29.3073 26.0843C29.074 26.3176 28.9573 26.551 28.724 26.7843C27.9073 27.8343 27.4407 29.1176 27.4407 30.401C27.4407 31.3343 27.674 32.2676 28.024 33.0843L28.1407 33.4343C29.1907 35.651 30.5907 37.6343 32.4573 39.3843L32.924 39.851C33.274 40.201 33.624 40.4343 33.8573 40.7843C36.3073 42.8843 39.1073 44.401 42.2573 45.2176C42.6073 45.3343 43.074 45.3343 43.424 45.451C43.774 45.451 44.2407 45.451 44.5907 45.451C45.174 45.451 45.874 45.2176 46.3407 44.9843C46.6907 44.751 46.924 44.751 47.1573 44.5176L47.3907 44.2843C47.624 44.051 47.8573 43.9343 48.0907 43.701C48.324 43.4676 48.5573 43.2343 48.674 43.001C48.9073 42.5343 49.024 41.951 49.1407 41.3676C49.1407 41.1343 49.1407 40.7843 49.1407 40.551C49.1407 40.551 49.024 40.4343 48.7907 40.3176Z' fill='white'/%3E%3C/svg%3E%0A"
                      alt="whatsapp icon"
                      aria-hidden="true"
                      width="20"
                      className="mr-2"
                    />{' '}
                    08036879999
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    href="/contact"
                    passHref
                    activeClassName="active"
                  >
                    <a className="nav-link">
                      <img
                        src="data:image/svg+xml,%0A%3Csvg width='61' height='61' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M60.8268 7.34844C61.8006 2.95574 57.7156 -1.008 53.2927 0.271994L4.36607 14.5087L3.89391 14.6656C-0.698556 16.394 -1.40319 22.7901 2.89828 25.4381L23.1343 37.8939L35.3086 58.0629L35.5821 58.4793C38.436 62.4777 44.7556 61.5092 46.1964 56.6624L60.7124 7.78896L60.8268 7.34844ZM54.8272 4.72893C55.7297 4.63203 56.5007 5.50983 56.2198 6.45237L41.7033 55.3275L41.6081 55.5671C41.1544 56.4592 39.8707 56.55 39.3221 55.641L27.7971 36.5503L44.2111 20.0306L44.4372 19.7669C45.1149 18.8471 45.0349 17.5453 44.2001 16.716L43.9365 16.49C43.0167 15.8122 41.7148 15.8922 40.8855 16.727L24.4939 33.2253L5.35571 21.4465L5.14908 21.2913C4.40585 20.6142 4.65603 19.3057 5.67444 19.0102L54.5993 4.77398L54.8272 4.72893Z' fill='%23200E32'/%3E%3C/svg%3E%0A"
                        alt="send icon"
                        aria-hidden="true"
                        width="20"
                        className="mr-2"
                      />{' '}
                      Contact us
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarWrapper>
    </div>
  );
};

const NavbarWrapper = styled(Navbar)`
  .nav-button.nav-link.active {
    color: white !important;
  }
  padding: 1rem !important;
  background: transparent;
  height: 85px;
  @media (max-width: 992px) {
    padding: 6px 1rem !important;
  }
  &.toggleExpand {
    .navbar-toggler {
      border: none;

      span {
        background-image: url("data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 6L18 18' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }
    }
  }
  .navbar-toggler {
    border: none;
    outline: none;
    &-icon {
      width: 26px !important;
      height: 26px !important;
    }
  }
  .dropdown-toggle::after {
    padding: 3px;
    margin-left: 0.455em;
    border: solid black;
    transform: rotate(45deg);
    @media (max-width: 992px) {
      float: right;
    }

    -webkit-transform: rotate(45deg);
    border-top: 0px solid red;
    border-right: 1px solid #636363 !important;
    border-bottom: 1px solid #636363 !important;
    border-left: 0px solid #636363 !important;
  }

  .container-fluid {
    max-width: 1350px;
  }
  a.nav-link.active {
    color: var(--primary-blue) !important;
    font-weight: 500;
  }
  .dropdown-menu.show {
    border: 1px solid #efefef;
    box-shadow: 0px 1.56927px 31.3854px rgb(0 0 0 / 10%);
    animation: fadeIn 0.5s;

    margin-top: 0.5rem !important;

    border-radius: 15px;
    overflow: hidden;

    .nav-link {
      font-weight: 400 !important;
      font-size: 15px !important;
      color: var(--text-black) !important;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .navbar-brand {
    svg {
      width: 97px;

      @media (max-width: 992px) {
        width: 75px;
      }
    }
  }
  button.dropdown-toggle.btn.btn-primary:after {
    position: absolute;
    right: 13px;
    /* transform: translate(0%, -50%); */
    margin-top: -27px;
  }

  button.dropdown-toggle.btn.btn-primary {
    padding: 0;
    background: transparent;
    border-color: var(--primary-blue) !important;
    border: navajowhite;
    outline: none !important;
    box-shadow: none !important;
    margin: 0;
  }

  .nav-drop-wrapper {
    div.dropdown-menu.show {
      margin: 0px;
      width: 900px;
      padding: 0;
    }
    a.nav-link.nav-drop-wrap img {
      width: 50px;
      margin-right: 1rem;
    }
    a.nav-link.nav-drop-wrap p {
      font-weight: 400;
      font-size: calc(var(--font-p) + 0px);
      margin-bottom: 0;
    }
    a.nav-link.nav-drop-wrap h4 {
      font-size: calc(var(--font-p) + 2px);
      font-weight: 600;
      /* font-size: 22px; */
      line-height: 24px;
      color: #484848;
      margin-bottom: 4px;
    }
    h3 {
      font-weight: 600;
      font-size: var(--font-h5);
      line-height: 30px;
      margin-left: 1rem;
      color: #484848;
    }
    a.nav-link.nav-drop-wrap {
      border-radius: 20px;
      transition: all 0.3s ease-in;
      padding: 15px;
      margin-bottom: 1rem;
      .flex-content {
        position: relative;
        width: 100%;
        img {
          width: 20px;
          position: absolute;
          right: 0;
          opacity: 0;
          transition: all 0.3s ease-in;
          top: 50%;
          transform: translate(0, -50%);
        }
      }

      &.active,
      &:hover {
        background: #f5f9f9;
        h4 {
          color: var(--primary-blue);
        }
        .flex-content {
          img {
            opacity: 1;
          }
        }
      }
    }
  }

  .right-card {
    background: #ffe6e1;
    padding: 3rem 2rem;
    h4 {
      font-size: calc(var(--font-h5) - 1px);
      color: #484848;
      font-weight: 300;
      margin-bottom: 1rem;
    }
    .nav-link_ {
      font-weight: 500;
      font-size: calc(var(--font-h5) - 1px) !important;
      line-height: 24px;
      display: block;
      padding: 0.8rem 0;
      color: #000;
    }
  }
  .ml-auto.navbar-nav {
    @media (max-width: 992px) {
      margin-top: 1.2rem;
      .nav-button {
        margin-right: 10px;
      }
      a:visited {
        color: white;
      }
      .dropdown-toggle {
        &:after {
          content: unset;
        }
      }
    }
  }

  .nav-link {
    font-weight: 500;
    font-size: calc(var(--font-h5) - 1px) !important;
    line-height: 24px;

    color: var(--text-black) !important;

    @media (min-width: 992px) {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    @media (max-width: 992px) {
      border-bottom: 1px solid #e4e4e4;
      padding: 12px 9px !important;
      margin-bottom: 0.8rem;
      font-weight: 600;
      font-size: 18px !important;
      color: var(--primary-blue) !important;
    }

    &.nav-button {
      background: var(--primary-blue);
      margin: 0 0px 0 11px;
      color: #fff !important;
      font-weight: 500;

      @media (max-width: 992px) {
        width: fit-content !important;
        margin-left: 0 !important;

        margin-bottom: 1rem;
      }
      padding: 0.5rem 1.5rem !important;
      &-outline {
        font-weight: 500;
        padding-right: 35px !important;
        text-transform: unset !important;
        background: transparent;
        border: 1px solid var(--primary-blue);
        color: var(--primary-blue) !important;
      }
    }
  }
  .toggle_blue:after {
    border-color: var(--primary-blue) !important;
  }
  @media (max-width: 992px) {
    .navbar-collapse {
      transition: all 0.05s ease;
    }
    .navbar-collapse.collapse.show {
      background: white;
      padding: 6px 18px;
      border-radius: 1;
      box-shadow: none;
      margin-top: 13px;
      overflow: auto;
      border-top: 1px solid #e4e4e4;
      /* position: fixed; */
      width: 100%;
      margin-left: -15px;
      margin-right: -15px;
      height: calc(100vh - 75px);
    }

    .dropdown-menu.show {
      padding: 0 13px;
      border: none;
      box-shadow: none;
    }
    .nav-drop-wrapper {
      div.dropdown-menu.show {
        width: 100%;
        padding: 15px;
      }
    }
  }
`;
export default NavbarLayout;
