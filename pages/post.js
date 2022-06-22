import client from '../client.js';
import Layout from "../components/Layout";
import EachLink from '../components/EachLink.js';

export default function Blog({ posts }) {
    return (
        <Layout>
            <div className="blog-heading-outer">
                <h2 className="blog-heading">I write about JavaScirpt & react.</h2>
            </div>
            <EachLink posts={posts} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const query = `*\[_type == "Markdown"\]`;
    const posts = await client.fetch(query);
    return {
        props: {
            posts
        }
    }
} 
