// filepath: c:\Users\arefi\OneDrive\Desktop\Next-JS\next-js-basics\app\Blogs\[id]\page.js
import { notFound } from 'next/navigation';
import React from 'react';

export default function singleBlog({ params }) {
    const { id } = params; // Access params directly

    if (id === '3') {
        notFound(); // Trigger the notFound page if id is '3'
    }

    return (
        <div className='mt-6'>
             <p>The blog id is: {id}</p>
        </div>
    );
}