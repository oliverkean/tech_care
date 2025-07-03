import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function MainLayout({ child }) {
  return (
    // MainLayout 
    <div>
      <div className="flex min-h-screen">
          <Navbar />
          <section className="flex-grow p-4">{child}</section>
      </div>
    </div>
  );
}

export default MainLayout;
