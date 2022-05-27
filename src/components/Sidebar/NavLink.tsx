import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkContainer } from './styles'

interface NavLinkProps {
  title: string;
  path: string;
  includes?: boolean;
  children: any;
}

export default function NavLink({ title, path, includes = false, children }: NavLinkProps) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{children}{title}</a>
      </Link>
    </NavLinkContainer>
  )
}