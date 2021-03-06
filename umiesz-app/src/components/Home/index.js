import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import MainBanner from './MainBanner';
import MainView from './MainView';

const mapStateToProps = state => ({
    appName: state.appName
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'HOME_PAGE_LOADED', payload })
});

class Home extends React.Component {
    componentWillMount() {
        this.props.onLoad(agent.Articles.all())
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);