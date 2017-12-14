import * as React from "react";

interface IBlogPostProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}

export default class BlogPostTemplate extends React.Component<IBlogPostProps> {
  public render() {
    const { markdownRemark: post } = this.props.data;
    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
