import React from "react";
import redirectTo from "@lib/redirect-to";

/**
 * Private HOC: Render a component only if credentials are present
 */
export default WrappedComponent =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      // Before anything check credentials
      //@TODO: Replace with authorization mechanism
      if (true) {
        redirectTo("/", ctx);
      }

      let componentProps = {};

      // Get propr from wrapped component if getInitialProps defined
      componentProps =
        WrappedComponent.getInitialProps &&
        WrappedComponent.getInitialProps(ctx);

      // Return WrappedComponent props mixed with new Props
      return { componentProps };
    }

    render() {
      return <WrappedComponent />;
    }
  };
