import React from 'react';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavMenu } from './components/NavMenu';
import { SearchBar } from './components/SearchBar';

function App() {
  const items = [
    {
      link: "https://google.com",
      title: "Link 1",
    },
    {
      link: "https://google.com",
      title: "Link 2",
    },
    {
      link: "https://google.com",
      title: "Link 3",
    },
    {
      link: "https://google.com",
      title: "Link 4",
    },
  ]
  return (
    <>
    <header className="main-header">
      <Header/>
    </header>
    <NavMenu items={items} />
  </>
  );
}

export default App;
