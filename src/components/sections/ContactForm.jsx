'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';

export default function ContactForm({ lang }) {
  const isAr = lang === 'ar';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const now = new Date().toLocaleString();

    emailjs
      .send(
        'service_s5jd9cr',
        'template_suhi2hk',
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: now,
        },
        'zv0GOn8QLxP72zs1I'
      )
      .then(() => {
        setStatus('sent');
        toast.success(isAr ? 'تم إرسال الرسالة بنجاح' : 'Message sent!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setStatus('error');
        toast.error(isAr ? 'حدث خطأ، حاول مجددًا' : 'Something went wrong');
        console.error(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto bg-muted/10 p-6 rounded-xl shadow-lg shadow-orange-500/25 backdrop-blur-sm"
    >
      <input
        type="text"
        name="name"
        placeholder={isAr ? 'الاسم' : 'Name'}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:border-background focus:outline-none focus:ring focus:ring-accent"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:border-background focus:outline-none focus:ring focus:ring-accent"
        required
      />
      <textarea
        name="message"
        placeholder={isAr ? 'رسالتك' : 'Your message'}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2 rounded border focus:border-background focus:outline-none focus:ring focus:ring-accent min-h-[120px]"
        required
      ></textarea>

      <div className="flex justify-center">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending'
            ? isAr ? 'جارٍ الإرسال...' : 'Sending...'
            : isAr ? 'إرسال' : 'Send'}
        </Button>
      </div>

      {status === 'sent' && (
        <p className="text-text text-center mt-2">
          {isAr ? 'تم إرسال رسالتك بنجاح' : 'Message sent successfully'}
        </p>
      )}
    </form>
  );
}
