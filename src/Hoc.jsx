import React from "react";

export const Hoc = (Wrapped) => {
  return class extends React.Component {
    state = {
      auth: true
    };
    render() {
      return (
        <>
          {this.state.auth ? (
            <Wrapped name="krishna" />
          ) : (
            <Wrapped name="raj" />
          )}
        </>
      );
    }
  };
};
