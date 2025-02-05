```javascript
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>About</h1>
      {location.pathname === '/about' && <p>This is the about page</p>}
    </div>
  );
}

function Contact() {
  return <h1>Contact</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}
export default App; 
```