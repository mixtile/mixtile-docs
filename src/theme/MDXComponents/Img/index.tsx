import {useCallback, useEffect, useState, type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = ComponentProps<'img'>;

/**
 * Markdown images, with click-to-enlarge.
 *
 * Swizzled from `@theme/MDXComponents/Img`. It keeps the theme's own output —
 * `decoding="async"`, `loading="lazy"` and the `img` class — and adds an
 * overlay so the fine print in block diagrams and pinouts is readable without
 * leaving the page. The overlay only mounts while it is open, so a page with a
 * dozen images pays for one click handler each and nothing else.
 */
export default function MDXImg({className, alt, ...props}: Props): ReactNode {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    // Freeze the page behind the overlay rather than letting it scroll away.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  const onClick = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
    // A linked image keeps its link behaviour; only bare images enlarge.
    if (event.currentTarget.closest('a') || !event.currentTarget.naturalWidth) {
      return;
    }
    event.preventDefault();
    setOpen(true);
  }, []);

  return (
    <>
      <img
        decoding="async"
        loading="lazy"
        {...props}
        alt={alt}
        className={clsx(className, styles.img, styles.zoomable)}
        onClick={onClick}
      />
      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Enlarged image'}
          onClick={close}>
          <img className={styles.enlarged} src={props.src} alt={alt ?? ''} />
        </div>
      )}
    </>
  );
}
