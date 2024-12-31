import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import BlogCard from "../components/BlogCard";



interface Post {
    title:string,
    summary:string,
    image:string,
    slug:string
}

export default async function Author(){

     const query = `*[_type=='post'] | order(_createdAt asc){
      
        summary,title,image,
          "slug":slug.current
      }`;
    
      const posts:Post[] = await client.fetch(query)
    return(
        <div className="max-w-[1216px] mx-auto ">
          <section className="h-[344px]  bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-center ">
          <div className="max-w-[688px] mx-auto flex-col items-center justify-center ">
            <h2 className="text-center text-2xl font-bold">Jonathan Doe</h2>
            <p className="text-center">Collaborator & Editor</p>
                <p className="text-center">
                Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.
                </p>
                <div className="flex items-center justify-center gap-x-4">
                <div className="bg-gray-500 p-2 rounded-sm">
                    <FaFacebook/>
                    </div>
                    <div className="bg-gray-500 p-2 rounded-sm">
                    <FaTwitter/>
                    </div>
                    <div className="bg-gray-500 p-2 rounded-sm">
                    <FaInstagram/>
                    </div>
                    <div className="bg-gray-500 p-2 rounded-sm">
                    <FaYoutube/>
                    </div>
                   
                   
                 

                </div>

            </div>
          </section>
             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                      posts.map((post:Post)=>(
                        <BlogCard post={post} key={post.slug} />
                      ))
                    }
            
                  </section>

        </div>
    )
}