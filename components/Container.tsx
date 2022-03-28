import { ReactNode, FunctionComponent } from 'react'
import SideNavigation from './SideNavigation';

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div>
      <div className='flex flex-row'>
        <SideNavigation />
        <div className='container mx-auto'>
          {children}
        </div>
      </div>
    </div>);
}

export default Container;
