import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
