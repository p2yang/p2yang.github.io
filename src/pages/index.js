import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main className="home">
      <Link
        className="btn-blog"
        to="/blog">
        Web Blog
      </Link>
    </main>
  );
}
