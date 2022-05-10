import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// 進度條套件 React-circular-progressbar

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">React-circular-progressbar</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar 
                value={70} 
                text={"70%"} 
                strokeWidth={5} />
            </div>
            
        </div>
    </div>
  )
}

export default Featured