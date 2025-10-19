import Skeleton from '@/components/ui/Skeleton';

export default function ProjectLoading() {
    return (
        <main className="px-6 py-12 max-w-4xl mx-auto">
            <div className="mb-8">
                <Skeleton className="h-6 w-32 mb-6" />

                <Skeleton className="h-10 w-3/4 mb-4" />

                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-6" />

                <div className="flex flex-wrap gap-2 mb-8">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                </div>

                <div className="mb-8">
                    <Skeleton className="h-12 w-40" />
                </div>

                <Skeleton className="h-64 w-full rounded-xl mb-8" />

                <Skeleton className="h-4 w-40" />
            </div>
        </main>
    );
}