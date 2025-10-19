import { cn } from '@/lib/utils';

export default function Skeleton({
    className,
    ...props
}) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-accent/20', className)}
            {...props}
        />
    );
}