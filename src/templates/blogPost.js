// import React from "react"
// import Layout from "../layout"
// import { Link, graphql } from "gatsby"
// import { Container, MainBody } from "../styles"

// export default ({ data }) => {
//   return (
//     <Layout>
//       <MainBody>
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <Container key={node.id}>
//             <Link to={node.fields.slug}>
//               <h3>
//                 {node.frontmatter.title}
//                 <span>{node.frontmatter.date}</span>
//               </h3>
//               <p>{node.excerpt}</p>
//             </Link>
//           </Container>
//         ))}
//       </MainBody>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
