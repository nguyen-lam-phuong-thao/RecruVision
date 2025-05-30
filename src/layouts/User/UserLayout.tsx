import { type JSX } from 'react'
import { Sidebar } from '../../components/ui/Sidebar'
import { Outlet } from 'react-router-dom'
export const UserLayout = (): JSX.Element => {
  return (
    <div className='flex min-h-screen'>
      <div className=""><Sidebar/></div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
