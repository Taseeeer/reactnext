import Layout from "../components/Layout";
import { AiOutlineTwitter } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { playAudio } from "../lib/usePlayAudio";

export default function Home() {
  
  const audioRef = useRef();
  
  const handleTweet = () => {
      playAudio(audioRef);
      setTimeout(() => {
        window.location.href = "https://twitter.com/taseeeer";
      }, 350);
  }

  return (
    <div>
      <Layout>
        <h2 className="skew">WELCOME 👋</h2>
        <div className="for-twitter" onClick={handleTweet}>
          <a className="twitter" >{<AiOutlineTwitter />}</a>
          <span>Follow me on twitter.</span>
        </div>
        <div>
          <audio id="charging" style={{visibility: "hidden"}} ref={audioRef}>
            <source src="/twitter.mp3"></source>
          </audio>
        </div>
      </Layout>
    </div>
  )
}
