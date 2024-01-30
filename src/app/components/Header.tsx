import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-10">
      <nav className="container mx-auto">
        <ul className="flex p-4">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/bc">Bc.</Link>
          </li>
          <li>
            <Link href="/ing">Ing.</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
