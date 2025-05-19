
import React from 'react'
import getPost  from '@/lib/getPost';

export async function generateMetadata({params}) {
  const {id} = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({params}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <div className='mt-6'>
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
    </div>
  )
}
