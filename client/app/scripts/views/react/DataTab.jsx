define(function(require){
    'use strict';

    var React = require('react'),
        DataBody = require('views/react/DataBody');

    return class DataTab extends React.Component {
        render(){
            return (
                <div>
                    <div className="tab-title">{this.props.title}</div>
                    <DataBody data={this.props.data} />
                </div>
            )
        }
    }
});
