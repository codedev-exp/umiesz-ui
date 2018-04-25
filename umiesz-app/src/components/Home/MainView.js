import React from 'react';
import { connect } from 'react-redux';
import ArticleList from '../ArticleList';

const mapStateToProps = state => ({
    articles: state.articles
});

const MainView = props => {
    return (
        <div>
            <h3>NAglowek listy</h3>
            <ArticleList articles={props.articles} />
        </div>
    );
}
// class MainView extends React.Component {
//     render(){
//         return(
//             <div>

//             </div>
//         );
//     }
// }

export default connect(mapStateToProps, () => ({}))(MainView);