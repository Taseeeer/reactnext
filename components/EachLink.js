import React from "react";
import { AiFillFile } from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";

import Link from "next/link";


export default function EachLink({ posts }) {
    return (
        <div className="each-link-outer">
                {posts?.map(each => (
                    <div key={each.title} className="each-link">
                        <Link href={`/post/${each.slug.current}`}>
                            <a>
                            <DiJsBadge className="each-file" />
                            <span className="markdown-title">{each.title}</span>
                            </a>
                        </Link>
                    </div>
                ))}  
        </div>
    )
}