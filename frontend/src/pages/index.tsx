import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="mt-6">
        <h1 className="text-center text-4xl font-extralight">
          A empresa Pharma Inc.
        </h1>
      </div>

      <div className="w-full h-screen flex items-center justify-center flex-col">
        <Link
          href={'/user-table'}
          className="bg-slate-800 text-white font-bold py-2 px-4 rounded"
        >
          Tabela de usuário
        </Link>
      </div>
    </div>
  )
}
