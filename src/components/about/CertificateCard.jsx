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
                className="cursor-pointer bg-background border border-muted rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
            >
                <div className="relative w-full h-48 sm:h-56 md:h-48">
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="p-4 flex flex-col gap-1 text-sm sm:text-base">
                    <h3 className="font-bold text-accent">{cert.title}</h3>
                    <p className="text-muted">{cert.description}</p>
                    <div className="text-xs text-text mt-2 flex justify-between items-center">
                        <span className="text-accent">{cert.date}</span>
                        <span>{isAr ? `المصدر: ${cert.source}` : `By: ${cert.source}`}</span>
                    </div>
                </div>
            </div>

            {open && <Modal cert={cert} isAr={isAr} onClose={() => setOpen(false)} />}
        </>
    );
}
