import React from "react";
import { connect } from "react-redux";

const Index = () => {
  return (
    <>
      <h2>Index !</h2>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
