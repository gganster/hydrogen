import PerfectScrollbar from 'react-perfect-scrollbar'
import {useState} from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <div className="flex w-60 min-h-screen h-screen max-h-screen bg-indigo-900 overflow-y-hidden"
           style={{minWidth: "15rem", maxWidth: "15rem"}}>
        <PerfectScrollbar className="w-60 overflow-y-scroll">
          <p>start</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>fe</p>
          <p>end</p>

        </PerfectScrollbar>
      </div>
  )
}

export default Sidebar;