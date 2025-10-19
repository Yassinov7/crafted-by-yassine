'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function LikeButton({ postId, initialLikes, onLike }) {
    const [likes, setLikes] = useState(initialLikes || 0);
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (liked) return;

        try {
            const response = await fetch('/api/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post_id: postId }),
            });

            const result = await response.json();

            if (result.data === 'liked') {
                setLikes(prev => prev + 1);
                setLiked(true);
                if (onLike) onLike();
            }
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    return (
        <button
            onClick={handleLike}
            disabled={liked}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${liked
                    ? 'bg-red-500/20 text-red-500'
                    : 'bg-muted hover:bg-accent/20 text-foreground'
                }`}
        >
            <Heart className={`w-4 h-4 ${liked ? 'fill-red-500' : ''}`} />
            <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
    );
}