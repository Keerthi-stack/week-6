import React from 'react';

function App() {

  function BlogPost({ title, content, author }) {
    return (
      <div className="blog-post" style={styles.card}>
        <h2>{title}</h2>
        <p><strong>By:</strong> {author}</p>
        <p>{content}</p>
      </div>
    );
  }

  
  const posts = [
    {
      title: "The Future of Web Development",
      content: "Web development is constantly evolving. In this article, we explore the latest trends and technologies that are shaping the future of web development.",
      author: "Emily Davis"
    },
    {
      title: "JavaScript: The Heart of Web Apps",
      content: "JavaScript is at the core of modern web development. This post dives deep into how JavaScript powers web apps and the most useful features to master.",
      author: "John Smith"
    },
    {
      title: "Why Learn React?",
      content: "React is one of the most popular JavaScript libraries for building user interfaces. Learn why React is a great choice for building modern web applications.",
      author: "Jane Doe"
    }
  ];

  
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <BlogPost 
          key={index} 
          title={post.title} 
          content={post.content} 
          author={post.author} 
        />
      ))}
    </div>
  );
}


const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    fontFamily: 'Arial, sans-serif',
  }
};

export default App;
