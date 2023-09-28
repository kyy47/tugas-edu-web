import React from "react";
import CardBlog from "./CardBlog";
import blogData from "../data/blog-data.json";

function Blog() {
  return (
    <section className="p-10" id="blog">
      <div className="relative flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <p className="py-5 text-sm">Explore we blog in our platform</p>
      </div>
      <div className="grid grid-cols-3  gap-11">
        {blogData.map((item) => (
          <CardBlog
            key={item.post_id}
            author={item.author}
            authorImg={item.authorImg}
            imgUrl={item.imgUrl}
            content={item.content}
            post_id={item.post_id}
            date_published={item.date_published}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
