import React from 'react';
import Navbar from './navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is a sample home page with a navigation bar.</p>
      </div>
    </div>
  );
}
