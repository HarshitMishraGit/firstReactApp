import '../../index.css'
import PropTypes  from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <ul className='flex flex-row bg-black text-white py-5 space-x-5 justify-center text-center '>
                    <li>{props.title}</li>
                    <li>Home</li>
                    <li>About</li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

Navbar.prototype = {
    title: PropTypes.string,
}
Navbar.defaultProps = {
    title: "Default Title",
}
