import React, {Component} from 'react';

function withData(loadData, WrappedComponent) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        users: [],
        error: null,
      };
    }

    componentDidMount() {

    }

    render() {
      return (
          <WrappedComponent {...this.state} {...this.props}/>
      );
    }
  };
}

export default withData;