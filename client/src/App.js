import {Routes, Route,  Outlet} from "react-router-dom"
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage"
import BlogDetails from "./pages/BlogDetails"
import WriterPage from "./pages/WriterPage"
import { LoginPage,  SignupPage } from "./pages";
import Loading from "./components/Loading";
function Layout(){
  return(
    <div className="w-full flex flex-col min-h-screen px-4 md:px-10 2xl:px-29=8">
      {/* <Navbar/> */}

      <div className="flex-1">
        <Outlet/>
      </div>
      {/* Footer */}
    </div>
  )
}


function App() {
  const theme = "dark";
  const isLoading = false;
  return (
    <main className={theme}>
      <div className="w-full min-h-screen relative bg-white dark:bg-[#020b19]">
          <Routes>
            <Route element={<Layout/>} > 
              <Route path="/" element={<Home />}/>
              <Route path="/category" element={<CategoriesPage />}/>
              <Route path="/:slug/:id?" element={<BlogDetails />}/>
              <Route path="/writer/:id" element={<WriterPage />}/>
            </Route>
      
            <Route path="/sign-up" element={<SignupPage />}/>
            <Route path="/sing-in" element={<LoginPage />}/>
          </Routes>

          {isLoading && <Loading/>}
      </div>
    </main>
)
}

export default App;
