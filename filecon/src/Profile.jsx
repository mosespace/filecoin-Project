import DocumentComponent from './components/DocumentComponent'
import { Link } from 'react-router-dom'
import LayoutComponent from './components/Layout'

function Profile() {
  return (
    <LayoutComponent>
      <div className="flex flex-1 p-3 flex-col items-center justify-center min-h-screen">
        <div class="overflow-y-auto  w-1/2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <table class="table-fixed border-1 border-primaryLight text-white font-normal w-full rounded-md">
            <thead>
              <tr className="border-b-1 border-primaryLight">
                <th className="p-5">NAME OF UPLOAD</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-primaryLight text-neutral-300 font-light h-full ">
              <DocumentComponent />
              <DocumentComponent />
              <DocumentComponent />
              <DocumentComponent />
            </tbody>
          </table>
        </div>
        <Link
          to="/"
          className="mt-3 text-primaryText flex self-start rounded-md px-6 "
        >
          Back
        </Link>
      </div>
    </LayoutComponent>
  )
}

export default Profile
