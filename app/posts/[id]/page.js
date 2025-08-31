
import React from 'react'
import getPost  from '@/lib/getPost';
import { getPostComment } from '@/lib/getPostComment';
import Head from 'next/head';

export async function generateMetadata({params}) {
  const {id} = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({Promise}) {
    const {id} = params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);

    // const [post , comments] = await Promise.all([postPromise, commentsPromise]);
    const post = await Promise;
  return (
    <div className='mt-6'>
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading comments...</h1>" >
        <Comments  promise={commentsPromise} />
       
      </Suspense>
      
    </div>
  )
}
