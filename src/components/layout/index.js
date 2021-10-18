/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter, withRouter } from 'next/router';
import AOS from 'aos'
import BounceLoader from "react-spinners/BounceLoader"
/* -------------------------- Internal Dependencies ------------------------- */
import SkipToMain from 'components/a11y/skip-to-main';
import Footer from 'components/footer';
import SEO from 'components/seo';
import Navbar from 'components/navbar';
import styled from 'styled-components';

/* ---------------------------- Layout PropTypes ---------------------------- */
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  title: PropTypes.string,
  theme: PropTypes.string,
  noFooter: PropTypes.bool,
  noNav: PropTypes.bool,
  seo: PropTypes.object,
};

export const ThemeContext = React.createContext();

const Layout = ({
  children,
  title = 'DrugStoc',
  canonical,
  noFooter = false,
  noNav = false,
}) => {
  const loadTheme = () => localStorage.getItem('EZE_THEME', theme);
  const [theme, setTheme] = useState('dark');
  const [spinner, setSpinner] = useState(true)
  const toggleTheme = mode => {
    setTheme(mode);
    localStorage.setItem('EZE_THEME', mode);
  };

  useEffect(() => {
    AOS.init({
      duration: 300
    })
    loadTheme() && setTheme(loadTheme());
  }, []);

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, [router])

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      <SEO title={title} canonical={canonical} />
      <SkipToMain content="main-content" />
      {
        spinner ? <SpinnerContainer>
          <BounceLoader size={120} color={"#4c70d6"} />
        </SpinnerContainer> :
          <div>
            {!noNav && <Navbar theme={theme} />}
            <main className="margin__main" id="main-content">
              {children}
            </main>
            {!noFooter && <Footer />}
          </div>

      }
    </ThemeContext.Provider>
  );
};

const SpinnerContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

Layout.propTypes = propTypes;

export default withRouter(Layout);
