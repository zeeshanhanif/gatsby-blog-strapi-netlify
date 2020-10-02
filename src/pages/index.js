import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from 'gatsby-image';

const Home = ()=>  {
    
    const data = useStaticQuery(
        graphql`
            query {
                allStrapiBlog(sort: {fields: PublishedDate, order: DESC}) {
                    edges {
                      node {
                        id
                        Slug
                        Title
                        PublishedDate(formatString: "DD MMMM YYYY")
                        Excerpt
                        
                      }
                    }
                }
            }      
        `
    );
    
    console.log("data = ",data);
    return (
        <Layout>
            <SEO title="Blog Home" />
            <div>
                <ul className="posts">
                    {
                        data.allStrapiBlog.edges.map(edge=>{
                            return (
                                <li className="post" key={edge.node.id} >
                                    <h2>
                                        <Link to={`/${edge.node.Slug}`}>
                                            {edge.node.Title}
                                        </Link>
                                    </h2>
                                    <div className="meta">
                                        <span>Posted on {edge.node.PublishedDate}</span>
                                    </div>
                                    {/*
                                        edge.node.FeaturedImage && (
                                            <Img className="featured" fluid={edge.node.FeaturedImage.childImageSharp.fluid}
                                                alt={edge.node.Title} />
                                        )
                                        */}
                                    <p className="excerpt">
                                        {edge.node.Excerpt}
                                    </p>
                                    <div className="button">
                                        <Link to={`/${edge.node.Slug}`}>Read More</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}
export default Home;