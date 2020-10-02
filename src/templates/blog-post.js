import { Link } from "gatsby";
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
    query($slug: String!) {
        strapiBlog(Slug: {eq: $slug}) {
            Title
            PublishedDate(formatString: "DD MMMM YYYY")
            FeaturedImage {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            body
        }
    }
`;

const BlogPost = (props) => {
    console.log(props);
    return (
        <Layout>
            <SEO title={props.data.strapiBlog.Title} />
            <Link to="/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{props.data.strapiBlog.Title}</h1>
                <span className="meta">
                    Post on {props.data.strapiBlog.PublishedDate}
                </span>
                {
                    props.data.strapiBlog.FeaturedImage && (
                        <Img 
                            className="featured"
                            fluid={props.data.strapiBlog.FeaturedImage.childImageSharp.fluid}
                            alt={props.data.strapiBlog.Title}
                        />
                    )
                }
                <br/>
                <div>
                    {props.data.strapiBlog.body}
                </div>
                {/*JSON.stringify(props.data.strapiBlog.body)*/}
                
            </div>
        </Layout>
    )
}
export default BlogPost
