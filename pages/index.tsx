import Link from 'next/link';
import { MainLayouts } from '../components/layout/MainLayouts';


export default function Home() {
  return (
      <MainLayouts>
        
        <h1>Home</h1>
        <h1 className="title">
          Go to {' '}
          <Link href="/about" >
            <a >About!</a>
          </Link>
          
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>
      </MainLayouts>
  )
}
