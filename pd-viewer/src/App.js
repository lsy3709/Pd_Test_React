// import { useState, useCallback } from "react";
// import ItemsList from "./components/ItemsList";
// import Categories from "./components/Categories";
import {Route, Routes} from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';


//2
const App = () => {
    return(
        <Routes>
            <Route path="/" element={<ItemsPage/>}/>
            <Route path="/:category" element={<ItemsPage/>}/>
        </Routes>
    )
}

//1
// const App = () => {
//     const [category, setCategory] = useState('food');
//     const onSelect = useCallback(category => setCategory(category),[ ]);
//     return (
//         <div>
//         <Categories category={category} onSelect={onSelect}/>
//         <ItemsList category={category}/>
//         </div>
//     );
// };

export default App;