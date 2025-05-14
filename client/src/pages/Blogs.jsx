// BlogPage.jsx
import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Power of Natural Ingredients',
      excerpt: 'Discover how natural herbs and oils enhance your skincare routine...'
    },
    {
      title: 'Holistic Wellness Tips for Everyday Life',
      excerpt: 'Incorporate simple wellness rituals into your day for a healthier mind and body...'
    },
    {
      title: 'Understanding Herbal Benefits',
      excerpt: 'A quick guide to the healing properties of popular herbs and their uses...'
    }
  ];

  return (
    <div className=" bg-[#fff6f0] py-10 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-8 text-center">Garden of Eve Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-[#333] mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
            <button className="mt-4 text-[#ff9770] hover:underline text-sm font-medium">Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

