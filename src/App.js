import './lokesh/All.css'
import { Nav } from './lokesh/Nav';
import { NavLeft } from './lokesh/NavLeft';
import { NavRight } from './lokesh/NavRight';
import { SectionA2 } from './lokesh/sectionA2';
import { SectionB } from './lokesh/SectionB';
import { SectionC } from './lokesh/SectionC';
import { SectionD } from './lokesh/SectionD';
import { SectionE } from './lokesh/SectionE';
import { SectionF } from './lokesh/SectionF';


function App() {
  // const handleRef = (param) => window.scrollTo(0, param);
  return (
    <div>
   <Nav/>  
   <div className="main">
   <SectionA2/>
   <SectionB/>
   <SectionC/>
   <SectionD/>
   <SectionE/>
   <SectionF/>
   </div>
   <NavLeft/>
   <NavRight/>
    </div>
  );
}
  
export default App;