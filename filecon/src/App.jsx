import './App.css';
import LayoutComponent from './components/Layout';

export default function App() {
  return (
    <LayoutComponent>

    <h1 className="text-3xl font-bold underline text-red-200">
      Hello world!
    </h1>
    </LayoutComponent>
  )
}

// function App(props) {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path='/home'>
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }
