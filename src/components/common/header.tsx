import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className="flex w-full h-16 px-5 bg-slate-700 text-slate-100 text-2xl font-bold">
      <div className="my-auto cursor-pointer" onClick={() => router.push('/')}>
        CRC Cardbook
      </div>
    </header>
  )
}

export default Header
