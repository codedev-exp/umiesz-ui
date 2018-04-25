import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                {this.props.appName}
            </div>
        );
    }
}

export default Header;