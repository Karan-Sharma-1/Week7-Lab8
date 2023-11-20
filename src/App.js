// App.js
import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Header.css';
import './Section.css';
import './Article.css';
import './Sidebar.css';
import './Footer.css';

// Dynamic content using JavaScript variables
const appTitle = 'JSX and Props Showcase';
const section1Content = 'This is the content of section 1.';
const article1Title = 'Week 7 Lab 8';
const article1Text = 'Completed Week 7 Lab 8.';
const sidebarContent = 'Sidebar content goes here.';
const section2Content = 'This is the content of section 2.';
const footerText = 'Copyright © 2023 JSX Props App';

function App() {
  return (
    <div>
      <Header title={appTitle} />
      <Section heading="Section 1" content={section1Content} />
      <Article title={article1Title} text={article1Text} />
      <Sidebar content={sidebarContent} />
      <Section heading="Section 2" content={section2Content} />
      <Footer text={footerText} />
    </div>
  );
}

export default App;