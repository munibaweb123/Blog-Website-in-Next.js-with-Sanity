import { client } from "@/sanity/lib/client";
import BlogCard from "../components/BlogCard";



interface Post {
    title:string,
    summary:string,
    image:any,
    slug:string
}
export default async function blogPage(){
    const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
    return(
        <div className="min-h-screen flex-col max-w-[1216px] mx-auto">
              <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Recent IT Blogs
      </h1>
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