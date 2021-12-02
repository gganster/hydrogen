import {useState} from "react";
import PerfectScrollbar from 'react-perfect-scrollbar'

import Header from "./Dashboard/_Header";
import Sidebar from "./Dashboard/_Sidebar";

const Dashboard = (props) => {
  const {
    children
  } = props;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col-reverse w-full h-full max-h-screen min-h-screen">
        <PerfectScrollbar className="flex-1 bg-gray-100 max-h-full p-5">
          {children}
        </PerfectScrollbar>
        <Header onClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
    </div>
  )
}

export default Dashboard;