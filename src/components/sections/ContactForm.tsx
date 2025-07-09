'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('sent');
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto bg-muted/10 p-6 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder={isAr ? 'الاسم' : 'Name'}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:ring-accent"
        required
      />
      <input
        type="email"
        placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:ring-accent"
        required
      />
      <textarea
        placeholder={isAr ? 'رسالتك' : 'Your message'}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:ring-accent min-h-[120px]"
        required
      ></textarea>

      <div className="flex justify-center">
        <Button type="submit">{isAr ? 'إرسال' : 'Send'}</Button>
      </div>

      {status === 'sent' && (
        <p className="text-green-600 text-center mt-2">
          {isAr ? 'تم إرسال رسالتك بنجاح 🎉' : 'Message sent successfully 🎉'}
        </p>
      )}
    </form>
  );
}
