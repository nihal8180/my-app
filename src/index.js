import React from 'react';
import ReactDOM from 'react-dom/client';
import image from './image/th.jpg'
import './index.css';
import Header from './Header'
import Footer from './Footer'


function MainContent(){
  return(
    <div>

      <h1>Reasons I'm excited to learn React</h1>
       <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>
          I'm more likely to get a job as a developer if I know React
        </li>
       </ol>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <MainContent/>
    <Footer/>

</>
);

