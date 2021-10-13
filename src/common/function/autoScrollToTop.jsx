import { Component } from 'react';
import { withRouter } from 'react-router'

class AutoScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(AutoScrollToTop)