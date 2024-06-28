import SideNavbar from "@/components/sidebar/side-navbar";

const WithSidebarLyout = ({ children }) => {
  return (
    <section className={"w-full h-screen flex"}>
      {/* sidebar */}
      <SideNavbar />

      {/* main page */}
      <div className="w-full h-full px-3 pb-3 ml-[50px]">{children}</div>
    </section>
  );
};

export default WithSidebarLyout;
