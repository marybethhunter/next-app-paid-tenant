'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';

export default function PublicTest() {
  const { user } = useUser();
  
  const hasError = window.location.href.includes('login_required');

  if (!user && !hasError) {
    console.log('logging silently');
    return redirect(`/api/auth/silent-login`);
  } 

  return (
    <>
      <h1>public route test</h1>
    </>
  );
}
