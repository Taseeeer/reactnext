import React from "react";

import Layout from "../components/Layout";

export default function Insert() {

    return (
        <Layout>
        <div>
            <h2 className="skew">This application is slow when routing to posts. Have you noticed it too?</h2>
            <p>
                I dont know the exact reason why, but I have migrated this web application from Gatsby to Next.
                I built it in Gatsby first, it was very performant but everytime I tried to deploy it, I got build-errors.
                I searched for it but could'nt get anywhere, it was prolly conflicting packages, and those issues were posted by 
                other people as well facing the same issues but no proper solution.
            </p>
            <p>So I decided to migrated from Gatsby to Next. Gatsby uses graphql and queries data from sanity, which is very fast.
                In Next, I am using Groq-query to grab data from sanity and it takes sometime to fetch and inject into the template.
            </p>
            <p>I will prolly be looking for the optimization soon.</p>
        </div>
        </Layout>
    );
};