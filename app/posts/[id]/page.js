
import React from 'react'
import getPost  from '@/lib/getPost';
import { getPostComment } from '@/lib/getPostComment';

export async function generateMetadata({params}) {
  const {id} = params;
  const post = await getPost(id);
  const comments = await getPostComment(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({params}) {
    const {id} = params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);

    const [post , comments] = await Promise.all([postPromise, commentsPromise]);
  return (
    <div className='mt-6'>
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />
      <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {comments.map((comment)=> (
            <li className='mb-3' key={comment.id}>{comment.body}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
