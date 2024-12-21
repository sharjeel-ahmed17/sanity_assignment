// import {} from 'lucide-react';

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const getData = async () => {
  const res = await client.fetch(`*[_type == "blogs"]{
    title,
    year,
    category,
    description,
    "imageUrl": image.asset->url,
    image{
      alt
    }
  }`);
  return res;
};

const Work = async () => {
  const data = await getData();

  return (
    <div className="py-20 w-[80%] mx-auto">
      <h2 className="text-[22px] leading-[32.31px] font-medium mb-6">Featured Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-8">
        {data.map((product: any, index: number) => (
          <div key={index}>
            <WorkCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

interface WorkCardProps {
  product: {
    title: string;
    year: string;
    category: string;
    description: string;
    image?: {
      alt: string;
    };
    imageUrl?: string;
  };
}

function WorkCard({ product }: WorkCardProps) {
  return (
    <div className="mb-8">
      {/* Image */}
      {product.imageUrl && (
        <div>
          <Image
            src={product.imageUrl}
            alt={product.image?.alt || "Blog image"}
            width={200}
            height={100}
            className="rounded-md"
          />
        </div>
      )}

      {/* Content */}
      <div>
        <h3 className="font-bold text-[30px] leading-[44.06px] capitalize mb-3">
          {product.title}
        </h3>
        <p className="mb-3 capitalize">
          <span className="bg-red-500 px-4 py-2 text-white rounded-full mr-4 text-[18px] leading-[26.44px]">
            {product.year}
          </span>
          <span className="text-[20px]"> {product.category}</span>
        </p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
