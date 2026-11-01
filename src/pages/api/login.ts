import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { email, password } = body;

        const supabaseUrl = "https://kpzgbrmttwwajshjiokce.supabase.co";
        const supabaseAnonKey = "PASTE_KUNCI_PANJANG_BOS_DISINI"; // Kunci Supabase Bos

        const supabase = createClient(supabaseUrl, supabaseAnonKey);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ success: true, user: data.user }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err: any) {
        return new Response(JSON.stringify({ error: "Gagal terhubung ke server" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};