import AppContent from "../Layout/AppContent";
import Header from "../Layout/Header";
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
