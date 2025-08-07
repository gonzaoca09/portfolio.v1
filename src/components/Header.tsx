
import Link from "next/link";

export default function Header({}) {
  return (
    <header className="bg-[linear-gradient(90deg,rgba(42,123,155,1)_41%,rgba(95,200,130,1)_73%)] text-white shadow-md rounded-full flex justify-center items-center gap-8 my-8 py-2 w-min px-6 fixed top-0">
        {/* Lado izquierdo: Logo o Nombre */}
       {/*  <Link href="/" className="text-2xl font-bold text-shadow-white hover:text-green-400 transition-colors">
          HGO
        </Link> */}

        {/* Lado derecho: Links de Navegación */}
        <nav>
          <ul className="flex space-x-6">
             <li>
              <Link href="/" className="hover:text-cyan-800 transition-colors">
                Home
              </Link>
            </li>
             <li>
              <Link href="/about" className="hover:text-cyan-800 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-cyan-800 transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cyan-800 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-800 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}