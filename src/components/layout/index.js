/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import AOS from 'aos';
/* -------------------------- Internal Dependencies ------------------------- */
import SkipToMain from 'components/a11y/skip-to-main';
import Footer from 'components/footer';
// import SEO from 'components/seo';
import Navbar from 'components/navbar';

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
  // title = 'DrugStoc',
  // canonical,
  noFooter = false,
  noNav = false,
}) => {
  const loadTheme = () => localStorage.getItem('EZE_THEME', theme);
  const [theme, setTheme] = useState('dark');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const toggleTheme = mode => {
    setTheme(mode);
    localStorage.setItem('EZE_THEME', mode);
  };

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
    loadTheme() && setTheme(loadTheme());
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      {/* <SEO title={title} canonical={canonical} /> */}
      <SkipToMain content="main-content" />
      <div>
        {!noNav && <Navbar theme={theme} />}
        {!loaded && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 9999,
            }}
          />
        )}
        <main className="margin__main" id="main-content">
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </ThemeContext.Provider>
  );
};

Layout.propTypes = propTypes;

export default withRouter(Layout);
