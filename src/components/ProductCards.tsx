import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardLayout from '@theme/DocCard/Layout';
import styles from './ProductCards.module.css';

type Product = {href: string; label: string; icon: string};

const PRODUCTS: Product[] = [
  {href: '/blade-3/', label: 'Mixtile Blade 3', icon: 'blade-3.svg'},
  {href: '/edge-2/', label: 'Mixtile Edge 2', icon: 'edge-2.svg'},
  {href: '/core-3588e/', label: 'Mixtile Core 3588E', icon: 'core-3588e.svg'},
  {href: '/cluster-box/', label: 'Mixtile Cluster Box', icon: 'cluster-box.svg'},
  {href: '/core-3568/', label: 'Mixtile Core 3568', icon: 'core-3568.svg'},
];

function ProductCard({href, label, icon}: Product): ReactNode {
  const src = useBaseUrl(`/img/products/${icon}`);
  return (
    <article className={clsx(styles.productCardListItem, 'col col--6')}>
      <DocCardLayout
        item={{type: 'link', href, label}}
        href={href}
        title={label}
        icon={<img className={styles.productIcon} src={src} alt="" width={48} height={48} />}
      />
    </article>
  );
}

/**
 * Product list for the docs homepage.
 *
 * `<DocCardList>` only takes an emoji icon, so this renders the same row/column
 * grid and reuses the theme's own card layout, swapping the emoji for the
 * official product icon.
 */
export default function ProductCards(): ReactNode {
  return (
    <section className="row">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.href} {...product} />
      ))}
    </section>
  );
}
