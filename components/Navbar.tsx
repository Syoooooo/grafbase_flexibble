import { NavLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { AuthProviders } from "."

const Navbar = () => {
  const session = {}
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image 
            src="/logo.svg"
            alt="Flexibble"
            width={115}
            height={43}
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map(navlink => (
            <Link href={navlink.href} key={navlink.key}>
              <li>{navlink.text}</li>
            </Link>
          ))}
        </ul>
      </div>
      
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto

            <Link href="/create-project">
              Share Work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}
export default Navbar