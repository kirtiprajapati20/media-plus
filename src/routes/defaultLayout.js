
import AppContent from "../Layout/AppContent";
const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Header />
        <div className="container-fluid">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
