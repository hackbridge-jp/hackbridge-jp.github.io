import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'アイデアと技術で勝負する！',
    Svg: require('@site/static/img/undraw_project-team_dip6_9324dd.svg').default,
    description: (
      <>
        <p>学生ハッカソンは<strong>36時間でチームと協力してゼロからプロジェクトを形に</strong>する、まるでスタートアップみたいな超実践的体験！</p>
        <p>セミナーや楽しいイベントも盛りだくさんでネットワーキングの機会でもある。</p>
        <p>アメリカなどの各大学で開催されていて、<b>海外からの参加も受けて入れてる</b>。</p>
      </>
    ),
    actiontext: '学生ハッカソンとは',
    actionlink: '/docs/discover/what_is_hackathon',
  },
  {
    title: '今からアクション！',
    Svg: require('@site/static/img/undraw_knowledge_0ty5.svg').default,
    description: (
      <>
        <p>参加したいハッカソンを見つけて応募しよう。</p>
        <p>スキルを身につけて備えよう！過去のプロジェクトをチェックして、どんなスキルが求められているかを探るのも一手。</p>
      </>
    ),
    actiontext: 'ガイド',
    actionlink: '/docs/guide/search',
  },
  {
    title: '挑戦者を支援する',
    Svg: require('@site/static/img/undraw_appreciate-it_aans.svg').default,
    description: (
      <>
        <p>日本の有能な若者を、海外の学生ハッカソンに参加させることで、彼らに他では得られれない大きな学びと活躍のチャンスを与えることができます。</p>
        <p>また彼らに学生ハッカソン文化を日本に持ち帰ってもらうことで、長期的には日本の各大学で学生ハッカソンを実現・定着させることも目指せます</p>
        <p>支援方法を探りましょう。</p>
      </>
    ),
    actiontext: 'サポート',
    actionlink: '/discover',
  },
];

function Feature({Svg, title, description, actiontext, actionlink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div className="text--left text--small">
          <p>{description}</p>
        </div>
        <div>
          <i class="fa-solid fa-circle-chevron-right" style={{ marginRight: '10px' }}></i>
          <a href={actionlink} style={{ textDecoration: 'underline' }}>{actiontext}</a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
