import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.onCheckedChange = this.onCheckedChange.bind(this);
        this.state = {text: this.props.text, active: !this.props.checked};
        this.rowSize = this.handleRowSize(this.props.text);
        this.idField = this.props.idField;
    }

    handleRowSize(text) {
        let ar = [0, 30, 60, 90, 120, 150, 150, 180, 210, 240, 270, 300];
        let i;
        let myRowSize = ar.length;
        for (i=0; i < ar.length; i++) {
            if (text.length < ar[i]) {
                myRowSize = i;
                break;
            }
        }
        return myRowSize;
    }

    onTextChange(e) {
        this.rowSize = this.handleRowSize(e.target.value);
        this.setState({text: e.target.value});
    }

    onCheckedChange(e) {
        this.setState({checked: e.target.checked});
        this.props.checkedCallBack(this.props.idField);
    }

    render() {
        const divStyle = {
            display: 'flex', flexWrap: 'nowrap', padding: '0', margin: '0', listStyle: 'none'
        };
        return (
            <div style={divStyle}>
                <label className="checkBoxContainer">
                    <input type='checkbox' checked={this.state.checked} onChange={this.onCheckedChange}/>
                    <span className="checkmark"></span>
                </label>
                <textarea cols='32' rows={this.rowSize} onChange={this.onTextChange} defaultValue={this.state.text} />
            </div>
        );
    }
}




