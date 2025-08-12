import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AppDownload() {
  const router = useRouter();

  useEffect(() => {
    // Detect user's device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    console.log("agent", userAgent)
    
    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.drugstoc.app';
      return;
    }
    
    // iOS detection
    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      window.location.href = 'https://apps.apple.com/ng/app/drugstoc/idYOUR_APP_ID';
      return;
    }
    
    // Default fallback (web or unknown device)
    router.push('/');
  }, []);

  return (
    <div className="text-center p-8">
      <Head>
        <title>Download DrugStoc App</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Redirecting to app store...</h1>
      <p>If you're not redirected automatically, please choose:</p>
      <div className="flex justify-center gap-4 mt-4">
        <a 
          href="https://play.google.com/store/apps/details?id=com.drugstoc.app" 
          className="btn btn-primary"
        >
          Android
        </a>
        <a 
          href="https://apps.apple.com/ng/app/drugstoc/idYOUR_APP_ID" 
          className="btn btn-primary"
        >
          iOS
        </a>
      </div>
    </div>
  );
}