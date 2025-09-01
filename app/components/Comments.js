import React from 'react'

export default async function Comments({promise}) {
    const Comment = await  Promise;
  return (
    <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {Comments.map((comment)=> (
            <li className='mb-3' key={comment.id}>{comment.body}
            </li>
          ))}
        </ul>

      </div>
  )
}
