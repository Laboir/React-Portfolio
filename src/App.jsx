import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import About from "./components/About";
import Project from "./components/Project";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="main ">
      <Header />
      <AfterHeadder />
      <About />
      <BeforeProject />
      <Project />
      <BeforeForm />
      <Form />
    </div>
  );
}

// Header
function Header() {
  return (
    <div className="header">
      <video
        className=" h-screen w-screen object-cover "
        src="../public/bg_video.mp4"
        autoPlay
        loop
        muted
      />

      <div className=" h-full w-full bg-[rgba(0,0,0,0.2)]  bg-blend-multiply absolute top-0 "></div>

      <article className="    absolute  w-full  top-10 flex items-center gap-5  flex-col justify-center ">
        <Logo />
        <Navbar />;
      </article>
    </div>
  );
}

function AfterHeadder() {
  return (
    <div className="   after-header  bg-fixed h-screen bg-[url('https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat bg-center "></div>
  );
}

function BeforeProject() {
  return (
    <div className=" bg-fixed h-screen bg-[url('https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat bg-center "></div>
  );
}

function BeforeForm() {
  return (
    <div className=" h-screen  w-screen bg-[url('https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center  bg-fixed  "></div>
  );
}
