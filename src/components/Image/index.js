import { Component } from 'react';
const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  position: 'absolute',
  filter: 'blur(10px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)',
};

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }
  render() {
    const { overlaySrc = this.props.src } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, 'overlaySrc');
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          {...filteredProps}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
          src={this.props.src}
        />
        {!highResImageLoaded && (
          <img
            {...filteredProps}
            className={`${this.props.className} `}
            style={overlayStyles}
            src={overlaySrc}
            alt=''
          />
        )}
      </>
    );
  }
}
