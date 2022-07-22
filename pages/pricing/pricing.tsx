import Link from 'next/link';
import { MainLayouts } from '../../components/layout/MainLayouts';


export default function Pricing() {
  return (
      <MainLayouts>
        
        <h1>Pricing</h1>
        <h1 className="title">
          Go to {' '}
          <Link href="/about" >
            <a >Home!</a>
          </Link>
          
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/pricing/pricing.js</code>
        </p>
      </MainLayouts>
  )
}
