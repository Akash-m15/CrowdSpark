import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link';
export default function Header(){
    return (
        <div className="ui menu" style={{  backgroundColor:'orange' , color:'white'}}>
            <Link href="/campaign">
                <div className="item" style={{  backgroundColor:'orange' ,color:'white'}}>CrowdSpark</div>
            </Link>
            <div className="right menu">
                <Link href="/campaign">
                    <div className="item " style={{color:'white'}}>Campaigns</div>
                </Link>
                <Link href="/campaign/new">
                    <div className="item">+</div>
                </Link>
                
            </div>
        </div>
    );

}