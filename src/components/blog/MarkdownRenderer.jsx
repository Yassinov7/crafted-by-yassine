'use client';

import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';

export default function MarkdownRenderer({ content }) {
    if (!content) return null;

    // Check if content is already HTML
    if (typeof content === 'string' && (content.startsWith('<') || content.includes('<'))) {
        return (
            <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-accent prose-a:text-accent hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    // If content is JSON, try to parse it
    let jsonContent = content;
    if (typeof content === 'string') {
        try {
            jsonContent = JSON.parse(content);
        } catch (e) {
            // If parsing fails, treat as plain text
            return (
                <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-accent prose-a:text-accent hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: `<p>${content}</p>` }}
                />
            );
        }
    }

    // Check if it's a valid Tiptap JSON structure
    if (jsonContent && typeof jsonContent === 'object' && jsonContent.type === 'doc') {
        try {
            const html = generateHTML(jsonContent, [
                StarterKit,
                ImageExtension,
                LinkExtension,
            ]);

            return (
                <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-accent prose-a:text-accent hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            );
        } catch (error) {
            console.error('Error rendering Tiptap content:', error);
            // Fallback to displaying raw content
            return (
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-accent prose-a:text-accent hover:prose-a:underline">
                    <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
                </div>
            );
        }
    }

    // Default fallback
    return (
        <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-accent prose-a:text-accent hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: `<p>${JSON.stringify(jsonContent)}</p>` }}
        />
    );
}