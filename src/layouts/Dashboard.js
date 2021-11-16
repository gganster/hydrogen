import PerfectScrollbar from 'react-perfect-scrollbar'

import Header from "./Dashboard/_Header";
import Sidebar from "./Dashboard/_Sidebar";

const Dashboard = (props) => {
  const {
    children
  } = props;

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col-reverse w-full h-full max-h-screen min-h-screen">
        <PerfectScrollbar className="flex-1 bg-gray-100 max-h-full">
          {children}
        </PerfectScrollbar>
        <Header />
      </div>
    </div>
  )
}

export default Dashboard;