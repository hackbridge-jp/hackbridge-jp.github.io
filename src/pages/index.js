import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title jp-pop-text">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle jp-pop-text">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg jp-pop-text"
            to="docs/discover/what_is_hackathon">
            大学ハッカソンを知る 📖
          </Link>
          <Link
            className="button button--primary button--lg jp-pop-text"
            to="https://discord.gg/TP5D8M8D" style={{ display: 'flex', alignItems: 'center' }}>
            コミュニティに参加<img src='/img/discord-icon-black.svg'
    style={{ width: '24px', height: '24px', marginLeft: '8px',
      filter: 'invert(100%)', }}/>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
