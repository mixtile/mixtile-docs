import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardLayout from '@theme/DocCard/Layout';
import styles from './ProductCards.module.css';

type Software = {
  href: string;
  label: string;
  icon: string;
  description: string;
};

const SOFTWARE: Software[] = [
  {
    href: '/naos/',
    label: 'NAOS',
    icon: 'naos.svg',
    description: 'Alpine-based OS for RK3588 devices',
  },
];

function SoftwareCard({href, label, icon, description}: Software): ReactNode {
  const src = useBaseUrl(`/img/software/${icon}`);
  return (
    <article className={clsx(styles.productCardListItem, 'col col--12')}>
      <DocCardLayout
        item={{type: 'link', href, label}}
        href={href}
        title={label}
        description={description}
        icon={<img className={styles.productIcon} src={src} alt="" width={48} height={48} />}
      />
    </article>
  );
}

/**
 * Software list for the docs homepage.
 *
 * NAOS is an operating system, not a hardware product, so it gets its own
 * section rather than a card in the product grid. The layout matches the
 * product cards so the page keeps one visual language.
 */
export default function SoftwareCards(): ReactNode {
  return (
    <section className="row">
      {SOFTWARE.map((software) => (
        <SoftwareCard key={software.href} {...software} />
      ))}
    </section>
  );
}
