type ColumnProps = {
  title: string
  textSide: string
}

export const Column = ({ title, textSide }: ColumnProps) => {
  return (
    <th
      scope="col"
      className={`px-6 py-3 text-xs font-bold ${textSide} text-gray-500 uppercase`}
    >
      {title}
    </th>
  )
}
