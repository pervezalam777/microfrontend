//External dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error Boundary component
 * @param props property object 
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // TODO: log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      const compName = this.props.componentName !== '' 
                      ? `with ${this.props.componentName}`
                      : this.props.componentName;
      return (
        <div className='error-boundary'>
          <h2 className='error-boundary__heading'>Something went wrong {compName}</h2>
          <details style={{ whiteSpace: 'pre-wrap' }} className='error-boundary__details' >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  componentName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

ErrorBoundary.defaultProps = {
  componentName: ''
};

export default ErrorBoundary;