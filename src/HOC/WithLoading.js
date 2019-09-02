import React, { Component } from "react";
import "./WithLoading.css";
const WithLoading = WrappedComponent => {
  return class WithLoading extends Component {
    render() {
      return this.props.isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default WithLoading;
