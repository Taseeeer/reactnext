import { useEffect, useRef } from "react";
import client from '../../client';

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

import ReactMarkdown from 'react-markdown';


const Post = ({ post }) => {

  const router = useRouter();
  const { slug } = router.query;

  const codeRef = useRef(null);

  useEffect(() => {

      let pre = "[object HTMLPreElement]";

      const childNodes = codeRef.current ? Array.from(codeRef.current.children).filter(c => c.toString() === pre) : null;
      for(let i in childNodes) {
          childNodes[i].className = "code-background";
      }

  }, [post]);

  return (
      <>
      {post ? 
        <Layout>

            <div className="blog-heading-outer">
                <h2 className="blog-heading">{post?.title}</h2>
            </div>
            <div ref={codeRef}>
                <ReactMarkdown>
                  {post?.write}
                </ReactMarkdown>
            </div>
            <span className="date-and-time">{post?.dateandtime?.substring(0,10)}</span>
        </Layout>
        :
        <Layout>
          <div className="blog-heading-outer">
                <h2 className="blog-heading">Groq-ing data from Sanity...</h2>
            </div> 
        </Layout> 
      }
      </>
  );
};

export async function getStaticPaths() {
    const paths = await client.fetch(
      `*[_type == "post" && defined(slug.current)][].slug.current`
    )
  
    return {
      paths: paths.map((slug) => ({params: {slug}})),
      fallback: true,
    }
  }
  
  export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(`
      *[_type == "Markdown" && slug.current == $slug][0]
    `, { slug });
    return {
      props: {
        post
      }
    }
  }

export default Post;