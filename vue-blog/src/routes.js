import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Post from "./components/Post";
import Work from "./components/Work";
import PokemonWar from "./components/PokemonWar";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/advices', component: Advices, name: 'Advices'},
  {path: '/post/:id', component: Post, name: 'Post'},
  {path: '/work', component: Work, name: 'Work'},
  {path: '/pokemon-war', component: PokemonWar, name: 'PokemonWar'},
];
