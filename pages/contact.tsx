import Link from 'next/link';
import { MainLayouts } from '../components/layout/MainLayouts';

export default function Home() {
  return (
    <MainLayouts>
      
      <h1>Contact</h1>
      <h1 className="title">
        Go to {' '}
        <Link href="/" >
          <a >Home!</a>
        </Link>
        
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact.js</code>
      </p>
    </MainLayouts>
  )
}
