import React from 'react';
import { connect } from 'react-redux';
import MainBanner from './MainBanner';
import MainView from './MainView';

const mapStateToProps = state => ({
    appName: state.appName
});

class Home extends React.Component {
    render () {
        return (
            <div>
                <MainBanner bannerName="Glowny banner" />
                <div className="container page">
                    <div className="row">
                        <MainView />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(Home);