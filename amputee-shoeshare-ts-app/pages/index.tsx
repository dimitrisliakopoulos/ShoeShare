
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>ShoeMate - Amputee Social App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to ShoeMate 👟</h1>
      <p className="mb-4">A place where amputees can connect and share shoes.</p>
      <Link href="/inbox">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Go to Inbox</button>
      </Link>
    </div>
  );
}
