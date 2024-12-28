import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import NoPage from "./Pages/NoPage.js";
import Page1 from "./Pages/page1.js";
import Page2 from "./Pages/page2.js";
import Page3 from "./Pages/page3.js";
import Page4 from "./Pages/page4.js";
import Page5 from "./Pages/page5.js";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Page1/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/" element={<Page1/>}/> 
          <Route path="page2" element={<Page2/>}/>
          <Route path="page3" element={<Page3/>}/>
          <Route path="page4" element={<Page4/>}/>
          <Route path="page5" element={<Page5/>}/>
      </Routes>
    </BrowserRouter>
  );
}


const rootElement = document.getElementById("root");
const root=createRoot(rootElement);
root.render(<Index />);