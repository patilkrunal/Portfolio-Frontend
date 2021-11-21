import React from "react";
// import SEO from "../components/SEO";
import SubscribeForm from "../components/subscribe";
import blogs from "../data/blogs.json";
import "../styles/blog.css";

export const Blogs = () => {
  console.log(blogs);
  return (
    <section className="blog" id="top">
      <div className="container">
        <div className="title">
          <h1>Blog | My digital garden</h1>
          <h4 key={blogs.length}>{blogs.length} Posts</h4>
        </div>
        <div>
          {blogs.map(({ description, frontmatter, fields, link, id }) => (
            <>
              <a href={link} key={fields.slug}>
                <div className="card">
                  <div className="card-body">
                    <div className="col-8" key={id}>
                      {frontmatter.title}
                    </div>
                    {description}
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
        <SubscribeForm />
      </div>
    </section>
  );
};

export const Slider = () => {
  const [position, setPosition] = React.useState("1");
  let text = null;
  if (position === "0") {
    text = "👈";
  } else if (position === "1") {
    text = "👍";
  } else if (position === "2") {
    text = "👉";
  }
  return (
    <div>
      <h4>{text}</h4>{" "}
      <input
        type="range"
        step="1"
        max="2"
        min="0"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>
  );
};
