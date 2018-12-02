import React, {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.onTodoItemCheckedChange = this.onTodoItemCheckedChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.state = {
            listText: this.props.data.listText,
            items: this.props.data.items
        }
    }

    onTodoItemCheckedChange(idToInactivate) {
        this.state.items.forEach( (e) => {
            if (e.itemId === idToInactivate) { e.active = false; }
        });
        this.setState(this.state);
    }

    onAddItem(e) {
        this.state.items.push({itemId: this.randomId(), itemText: '', active: true })
        this.setState(this.state);
    }

    randomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }


    render() {
        return (
            <div className='cellLayout'>
                <TodoHeader text={this.state.listText} />
                {
                    this.state.items.filter( (m) => {
                        return m.active;
                    }).map((m) => {
                        return <TodoItem
                                key={m.itemId}
                                idField = {m.itemId}
                                checked={!m.active}
                                text={m.itemText}
                                checkedCallBack={this.onTodoItemCheckedChange}/>
                    })
                }
                <TodoFooter callBack={this.onAddItem}/>
            </div>
        );

    }

}
export default TodoContainer;