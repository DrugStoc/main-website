/* -------------------------------------------------------------------------- */
/*                            External Dpendencies                            */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------- SkipToMain PropTypes -------------------------- */
const propTypes = {
  content: PropTypes.string,
};

const SkipToMain = ({ content = '0' }) => {
  return (
    <>
      <Wrapper
        className="skip-main"
        href={`#${content}`}
        aria-label="Skip navigation and go to main content"
      >
        Skip to main content
      </Wrapper>
    </>
  );
};

const Wrapper = styled.a`
  left: -999px;
  position: fixed;
  top: auto;
  width: 1px;
  height: 1px;

  overflow: hidden;
  z-index: -999;

  &:focus,
  &:active {
    color: #fff;
    left: auto;
    background: var(--primary-blue);
    top: 0px;
    width: auto;
    height: auto;
    overflow: auto;
    padding: 9px 15px;
    border-radius: 1px 1px 5px 6px;
    border: 1px solid var(--primary-blue);
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
    font-size: calc(var(--font-x-sm) - 1px);
    z-index: 9999999;
    animation-name: fadeInTop;
    animation-timing-function: ease-out;
    animation-duration: 0.2s;
    animation-fill-mode: both;
  }
`;

SkipToMain.propTypes = propTypes;

export default SkipToMain;
