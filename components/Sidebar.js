import { HiSun, HiMoon } from "react-icons/hi";
import { GoSettings, GoFlame } from "react-icons/go";
import { BsHeadset } from "react-icons/bs";
import { DiVim } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import Link from "next/link";


export default function Sidebar({ setSelectedTheme, handleFireAudio }) {

    const setFireTheme = () => {
        setTimeout(() => {
            setSelectedTheme('fire');
        }, 300);
        handleFireAudio();
    }

    return (
        <section className="sidebar">
            <div className="sidebar-one">
                <span className="sidebar-one-options">
                    <HiSun onClick={() => setSelectedTheme('default')} />
                </span>
                <span className="sidebar-one-options">
                    <HiMoon onClick={() => setSelectedTheme('dark')} />
                </span>
                <span className="sidebar-one-options">
                    <GoFlame onClick={setFireTheme} />
                </span>
            </div>
            <div className="sidebar-two">
                <section className="sidebar-two-header">
                    <div className="sidebar-two-header-inner">
                        <span>Content</span>
                    </div>
                </section>
                <ul className="sidebar-two-routes">
                    <Link href="/post">
                        <span>Posts</span>
                    </Link>
                    <Link href="/about">
                        <span>About</span>
                    </Link>
                    <Link href="/insert">
                        <span>Slow?</span>
                    </Link>
                    <Link href="/update">
                        <span>Delete</span>
                    </Link>
                    <Link href="/delete">
                        <span>Update</span>
                    </Link>
                    <Link href="/">
                        <span style={{padding: "0.5rem 2rem"}}>
                                <DiVim style={{fontSize: "2rem"}} />
                        </span>
                    </Link>
                </ul>
                <section className="sidebar-two-footer">
                    <span>
                        <FaReact />
                    </span>
                    <div>
                        <GoSettings />
                        <BsHeadset />
                    </div>
                </section>
            </div>
        </section>
    )
}