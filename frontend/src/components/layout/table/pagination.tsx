import React from 'react'

type PaginationProps = {
  pageCurrent: number
  onNextPage: () => void
  onBackPage: () => void
}

export const Pagination = ({
  pageCurrent,
  onBackPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <div className="flex w-full items-center justify-between px-3 mt-3">
      <button
        className="bg-slate-800 text-white px-6 py-1 rounded-md
         hover:cursor-pointer hover:bg-slate-700 
         disabled:bg-slate-500 disabled:cursor-not-allowed
         "
        onClick={onBackPage}
        disabled={pageCurrent === 1}
      >
        Página Anterior
      </button>

      <div className="bg-slate-800 text-white px-6 py-1 rounded-md">
        Pagina atual: {pageCurrent}
      </div>
      <button
        className="bg-slate-800 text-white px-6 py-1 rounded-md hover:cursor-pointer hover:bg-slate-700"
        onClick={onNextPage}
      >
        Proximo Página
      </button>
    </div>
  )
}
