export default function HeaderNav({ children }: { children: React.ReactNode }) {
  return (
    <nav className='flex items-center gap-x-5'>
      {children}
    </nav>
  )
}