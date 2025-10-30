'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './CertificateModal';

export default function CertificateCard({ cert, isAr }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-background border border-muted rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2"
            >
                <div className="relative w-full h-48">
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="p-5 flex flex-col gap-2">
                    <h3 className="font-bold text-accent text-lg">{cert.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{cert.description}</p>
                    <div className="text-xs text-text mt-3 flex justify-between items-center">
                        <span className="text-accent font-medium">{cert.date}</span>
                        <span className="text-muted-foreground">{isAr ? `المصدر: ${cert.source}` : `By: ${cert.source}`}</span>
                    </div>
                </div>
            </div>

            {open && <Modal cert={cert} isAr={isAr} onClose={() => setOpen(false)} />}
        </>
    );
}