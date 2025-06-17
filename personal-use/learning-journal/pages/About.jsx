import React from "react";
import Example from "../components/Example";
import RecentPost from "../components/RecentPost";

export default function About() {
  return (
    <div>
      <div className="blog">
        <img src="../images/mr-potato.png" className="ava" />
        <h1 className="indent">
          Hi there! My name is Potato and welcome to my learning journal.
        </h1>
        <p className="indent">
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </p>
        <Example />
      </div>
      <div>
        <p className="bold center">Recent posts</p>
        <RecentPost />
      </div>
    </div>
  );
}
