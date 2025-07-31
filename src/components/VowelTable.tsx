type Props = {
  counts: { [vowel: string]: number }
}

export default function VowelTable({ counts }: Props) {
  return (
    <table className="mt-8 w-full max-w-sm justify-center border border-gray-300 text-center">
      <thead>
        <tr className="">
          <th className="p-2">Vocal</th>
          <th className="p-2">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(counts).map(([vowel, count]) => (
          <tr key={vowel} className="border-t">
            <td className="p-2">{vowel}</td>
            <td className="p-2">{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
