import React from 'react'
// import {useParams} from 'next/navigation'
import Link from 'next/link';

export default function BlogPage() {
    const blogs = [
        { 
            id: 1,
             title: 'Blog 1',
              content: 'This is the content of blog 1'
             },
        { 
            id: 2,
             title: 'Blog 2',
              content: 'This is the content of blog 2'
             },
        { id: 3, 
            title: 'Blog 3',
             content: 'This is the content of blog 3'
             },
    ];
  return (
    <main>
            <ul>
               {blogs.map((blog) => 
               (
                <li className='mb-4' key={blog.id}>
                     <Link href={`/Blogs/${blog.id}`}>{blog.title}</Link> 
                </li>
               ))}
            </ul>
    </main>
    
  )
}
