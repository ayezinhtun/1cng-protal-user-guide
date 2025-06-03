import type {ReactNode} from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import lunr from 'lunr';

import styles from './index.module.css';

// Sample data to search
const documents = [
  { id: '1', title: 'Getting Started', content: 'Learn how to start using the platform.' },
  { id: '2', title: 'Installation', content: 'How to install StackConsole.' },
  { id: '3', title: 'Configuration', content: 'Configure StackConsole to suit your needs.' },
];

// Create Lunr index
const index = lunr(function () {
  this.ref('id');
  this.field('title');
  this.field('content');

  documents.forEach((doc) => this.add(doc));
});

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/getting-started">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// Lunr search component (inline)
function LunrSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof documents>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    const matches = index.search(q);
    const found = matches
      .map((m) => documents.find((doc) => doc.id === m.ref))
      .filter(Boolean) as typeof documents;

    setResults(found);
  };

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search docs..."
        style={{
          padding: '0.5rem',
          width: '60%',
          fontSize: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #ccc',
        }}
      />
      <ul style={{ marginTop: '1rem', paddingLeft: 0 }}>
        {results.map((res) => (
          <li key={res.id} style={{ listStyle: 'none', margin: '1rem 0', textAlign: 'left' }}>
            <strong>{res.title}</strong>
            <p>{res.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LunrSearch />
      </main>
    </Layout>
  );
}
