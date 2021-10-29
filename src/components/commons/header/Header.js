import Search from 'components/commons/search/Search';
import './Header.scss';

const Header = (props) => {
    return (
        <div className="navbar fixed-top Header">
                <div className="col-12 col-md-6">
                    <Search />
                </div>
        </div>
    );
}

export default Header;