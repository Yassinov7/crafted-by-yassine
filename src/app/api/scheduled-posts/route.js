import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
    try {
        // Get current time
        const now = new Date().toISOString();

        // Find posts that are scheduled to be published now
        const { data: scheduledPosts, error } = await supabase
            .from('posts')
            .select('*')
            .eq('status', 'draft')
            .lte('scheduled_at', now)
            .not('scheduled_at', 'is', null);

        if (error) {
            console.error('Error fetching scheduled posts:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Update status of scheduled posts to 'published'
        let updatedCount = 0;
        for (const post of scheduledPosts) {
            const { error: updateError } = await supabase
                .from('posts')
                .update({
                    status: 'published',
                    published_at: now
                })
                .eq('id', post.id);

            if (!updateError) {
                updatedCount++;
            } else {
                console.error('Error updating post:', updateError);
            }
        }

        return NextResponse.json({
            message: 'Scheduled posts processed',
            processed: scheduledPosts.length,
            updated: updatedCount
        });
    } catch (error) {
        console.error('Error in scheduled posts API:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}