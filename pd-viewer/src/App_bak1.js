import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
    const [data,setData] = useState(null);
    const onClick =async () => {
      try{
        const response = await axios.get(
          'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=10&pageNo=1&resultType=json'
        );
        setData(response.data)
      } catch(e) {
        console.log(e)
      }
    }
    return (
        <div>
        <div>
            <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
        </div>
    )
};
export default App;