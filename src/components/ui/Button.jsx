import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Spinner from '@/components/ui/Spinner';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent',
        outline: 'border border-accent text-accent hover:bg-accent/10 focus:ring-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export default function Button({
  children,
  as = 'button',
  href,
  variant = 'default',
  className = '',
  isLoading = false,
}) {
  const classNames = cn(buttonStyles({ variant }), className);

  const content = (
    <>
      {isLoading && <Spinner size={16} />}
      <span className={isLoading ? 'ml-2' : ''}>{children}</span>
    </>
  );

  if (as === 'a') {
    return (
      <a href={href} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} disabled={isLoading}>
      {content}
    </button>
  );
}