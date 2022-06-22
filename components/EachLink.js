import React from "react";
import { AiFillFile } from "react-icons/ai";

import Link from "next/link";


export default function EachLink({ posts }) {
    return (
        <div className="each-link-outer">
                {posts?.map(each => (
                    <div key={each.title} className="each-link">
                        <Link href={`/post/${each.slug.current}`}>
                            <a>
                            <AiFillFile className="each-file" />
                            <span className="markdown-title">{each.title}</span>
                            </a>
                        </Link>
                    </div>
                ))}  
        </div>
    )
}