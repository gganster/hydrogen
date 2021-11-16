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
        <div className="flex-1 bg-gray-100 max-h-full" style={{overflowY: "scroll"}}>
          {children}
        </div>
        <Header />
      </div>
    </div>
  )
}

export default Dashboard;