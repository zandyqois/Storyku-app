
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Story from "./pages/story";       
import StoryAdd from "./pages/storyadd";          
import StoryAddChapter from "./pages/storyadd-chapter";   

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='story' element={<Story />} />
          <Route path='story/add' element={<StoryAdd />} />
          <Route path='story/add-chapter' element={<StoryAddChapter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);