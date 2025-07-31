import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const Backbutton = () => {
  return (
    <Link href="/" className="flex items-center hover:underline gap-x-2 mb-10">
      <ArrowLeft /> Volver
    </Link>
  )
}
