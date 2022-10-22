import { useStaticQuery, graphql } from "gatsby";
export default function useTechImageQuery() {
  const allTechImages = useStaticQuery(graphql`
    query techAllImgQuery {
      angular_img: file(relativePath: { eq: "angular.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sequelize_img: file(relativePath: { eq: "seq.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aws_img: file(relativePath: { eq: "aws.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamo_img: file(relativePath: { eq: "dynamo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      express_img: file(relativePath: { eq: "express.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      figma_img: file(relativePath: { eq: "figma.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flutter_img: file(relativePath: { eq: "flutter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      javascript_img: file(relativePath: { eq: "javascript.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongo_img: file(relativePath: { eq: "mongo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mysql_img: file(relativePath: { eq: "mysql.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      next_img: file(relativePath: { eq: "next.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node_img: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react_native_img: file(relativePath: { eq: "react-native.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react_img: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      swift_img: file(relativePath: { eq: "swift.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typescript_img: file(relativePath: { eq: "typescript.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vue_img: file(relativePath: { eq: "vue.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wp_img: file(relativePath: { eq: "wp.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return allTechImages;
}
