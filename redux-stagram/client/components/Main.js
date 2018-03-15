import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
    render() { 
        return (
            <div>
                <h1>
                    {/* react-router links to "/" path when clicked */}
                    <Link to="/">Redux-stagram</Link>
                </h1>
                {/* clones props from Main into its children, so they have access to all the props */}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}
 
export default Main;