import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
    try {
        const { post_id } = await request.json();
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

        // Call the safe_like function
        const { data, error } = await supabase.rpc('safe_like', {
            p_post_id: post_id,
            p_user_ip: ip
        });

        if (error) {
            console.error('Error liking post:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error in like API:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}