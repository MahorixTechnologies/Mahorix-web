'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WebinarRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('https://docs.google.com/forms/d/e/1FAIpQLSehgBn2S7GnF0stc4KsAX0TdZ0LXMPwco7ltE15jnG4HvlwrA/viewform');
    }, [router]);

    return null;
}