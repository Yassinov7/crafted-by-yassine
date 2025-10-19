'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function ViewCounter({ postId, initialViews }) {
    const [views, setViews] = useState(initialViews || 0);

    useEffect(() => {
        const recordView = async () => {
            try {
                const response = await fetch('/api/view', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ post_id: postId }),
                });

                const result = await response.json();

                if (result.data === 'viewed') {
                    setViews(prev => prev + 1);
                }
            } catch (error) {
                console.error('Error recording view:', error);
            }
        };

        if (postId) {
            recordView();
        }
    }, [postId]);

    return (
        <div className="flex items-center gap-1 text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span>{views} {views === 1 ? 'View' : 'Views'}</span>
        </div>
    );
}