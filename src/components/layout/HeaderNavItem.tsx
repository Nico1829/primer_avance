type HeaderNavItemProps = {
  navItem: {
    id: number;
    href: string;
    label: string;
  }
}

export default function HeaderNavItem({ navItem }: HeaderNavItemProps) {
  return (
    <a key={navItem.id} href={navItem.href}>{navItem.label}</a>
  )
}