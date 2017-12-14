import * as React from "react";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps> {
  public render() {
    return (
      <div>
        <h1>{this.props.data.site.siteMetadata.siteName}</h1>
        <p>Hello world!</p>
      </div>
    );
  }
}

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      siteName
    }
  }
}
`;
