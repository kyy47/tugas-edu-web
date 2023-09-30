import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jsonBlogData from "../../data/blog-data.json";
import Image from "next/image";
type BlogDataType = {
  post_id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
  imgUrl: string;
  authorImg: string;
};
function Blog() {
  const [blogData, setBlogData] = useState<BlogDataType>();
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const getData = jsonBlogData.find(
        (item) => item?.post_id === parseInt(id)
      );
      setBlogData(getData);
    }
  }, [router]);
  return (
    <div>
      <Header />
      <section className="min-h-[95vh] flex flex-col items-center mt-2 py-2">
        <h3 className="text-amber-600 font-bold text-xl">Blogs</h3>
        <h2 className="py-5 text-[2rem] font-bold max-w-[22rem] text-center leading-none">
          {blogData?.title}
        </h2>
        <div className="flex gap-3 items-center ">
          <div className="relative w-8 h-8">
            <Image
              src={blogData?.authorImg || "/flag.svg"}
              fill
              alt="img author"
              sizes="100%"
              className=" object-cover rounded-full"
            />
          </div>
          <p className="text-black font-semibold">
            John Smith{" "}
            <span className="text-slate-500">
              on {blogData?.date_published}
            </span>
          </p>
        </div>
        <div className="w-[60%] py-3 mt-4">
          <AspectRatio ratio={4 / 2.2} className="flex justify-center ">
            <div className="relative w-full ">
              <Image
                src={blogData?.imgUrl || "/flag.svg"}
                alt="imgUrl"
                fill
                sizes="100%"
                className=" rounded-xl overflow-hidden object-cover"
              />
            </div>
          </AspectRatio>
        </div>
        <div className="max-w-[700px] py-5 mb-6">
          <p className="text-lg font-medium text-slate-600">
            {blogData?.content}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
