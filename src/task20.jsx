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

  
  return (
    <div>
      <h1>Blog Posts</h1>

      <BlogPost 
        title="How to Learn React" 
        content="React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React, including components, props, and state." 
        author="Jane Doe" 
      />
      
      <BlogPost 
        title="Understanding JavaScript Closures" 
        content="A closure is a function that retains access to variables from its lexical scope even after the outer function has finished executing." 
        author="John Smith" 
      />
      
      <BlogPost 
        title="CSS Grid vs Flexbox" 
        content="In this post, we'll compare CSS Grid and Flexbox. Both are powerful layout systems in CSS, but they have different use cases." 
        author="Alice Johnson" 
      />
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
