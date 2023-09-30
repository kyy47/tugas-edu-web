import Image from "next/image";
import Link from "next/link";

type CardBlogProps = {
  post_id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
  imgUrl: string;
  authorImg: string;
};
function CardBlog({
  title,
  content,
  author,
  date_published,
  post_id,
  imgUrl,
  authorImg,
}: CardBlogProps) {
  return (
    <Link
      className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5   "
      href={`/blog/${post_id}`}
    >
      <div className="w-full h-52 overflow-hidden rounded-xl bg-red-400 relative">
        <Image
          className=" object-cover rounded-xl"
          src={imgUrl}
          fill
          sizes="100%"
          alt="Image Description"
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800  ">{title}</h3>
        <p className="mt-5 text-gray-600 line-clamp-4">{content}</p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <div className="relative w-8 h-8">
          <Image
            className=" rounded-full"
            src={authorImg}
            fill
            sizes="100%"
            alt="Image Description"
          />
        </div>
        <div>
          <h5 className="text-sm text-gray-800 ">{author}</h5>
        </div>
      </div>
    </Link>
  );
}

export default CardBlog;
