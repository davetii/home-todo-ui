import React, { Component } from 'react';
import './App.css';
import TodoContainer from "./components/TodoContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.onTodoItemCheckedChange = this.onTodoItemCheckedChange.bind(this);
    }

    onTodoItemCheckedChange(e) {

        console.log('onTodoItemCheckedChange called', e);
    }

    render() {

        const bootStrapData = [
            { listText: 'Normal List', listId : '123',
              items: [
                  {itemId: 12, itemText: 'This is a test of the americfan boradcastring associaiton, this thing need . ts find out this ought to be fun.', active: true},
                  {itemId: 122, itemText: 'Pick up milk from Kroger', active: true},
                  {itemId: 123, itemText: 'Pick up kids from school', active: true}
                  ]
            },
            { listText: 'Things to do with my life', listId : '1234',
                items: [
                    {itemId: 124, itemText: 'Ensure Mary is succesful', active: true},
                    {itemId: 125, itemText: 'Ensure David is succesful', active: true},
                    {itemId: 126, itemText: 'Get a cottage', active: true}
                ]
            }
        ];

        return (
          <div >
            <h1>Todo</h1>
            <div className="tableLayout tableLayout--4cols">
                {
                    bootStrapData.map((m) => {
                        return <TodoContainer data={m} key={m.listId}/>
                    })
                }



            </div>
          </div>
        );
    }
}

export default App;
