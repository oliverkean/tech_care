import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ child }) {
  return (
    <div className=" min-h-screen">
      <div className="w-full max-w-screen mx-auto px-4">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <section className="flex-grow p-4">{child}</section>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
