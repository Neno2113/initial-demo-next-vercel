import Link from 'next/link';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayouts } from '../components/layout/MainLayouts';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h1 className="title">
        Go to {' '}
        <Link href="/">
          <a >Home!</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about.js</code>
      </p>
    </>
    
  )
}

About.getLayout = function getLayout( page: JSX.Element | JSX.Element[] ) {
  return (
    <MainLayouts>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayouts>
  )
}
