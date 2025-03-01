import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'アイデアと技術で勝負する！',
    Svg: require('@site/static/img/undraw_project-team_dip6_9324dd.svg').default,
    description: (
      <>
        <p>大学ハッカソンは<strong>36時間でチームと協力してゼロからプロジェクトを形に</strong>する、まるでスタートアップみたいな超実践的体験！</p>
        <p>セミナーや楽しいイベントも盛りだくさんでネットワーキングの機会でもある。</p>
        <p>アメリカなどの各大学で開催されていて、<b>海外からの参加も受けて入れてる</b>。</p>
      </>
    ),
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
  },
  {
    title: '挑戦者を支援する',
    Svg: require('@site/static/img/undraw_appreciate-it_aans.svg').default,
    description: (
      <>
        <p>日本の有能な若者を、海外の大学ハッカソンに参加させることで、彼らに他では得られれない大きな学びと活躍のチャンスを与えることができます。</p>
        <p>また彼らに大学ハッカソン文化を日本に持ち帰ってもらうことで、長期的には日本の各大学で大学ハッカソンを実現・定着させることも目指せます</p>
        <p>支援方法を探りましょう。</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
