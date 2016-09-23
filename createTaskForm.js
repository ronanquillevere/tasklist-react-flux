var taskCreateFormClass = React.createClass(
{
    displayName: 'taskCreateForm',

    getInitialState: function()
    {
        return {
            text: ''
        };
    },
    
    handleTextChange: function(e)
    {
        this.setState(
        {
            text: e.target.value
        });
    },

    handleSubmit: function(e)
    {
        e.preventDefault(); //avoid real submit
        
        var id = Date.now();
        var action = {
          type : 'CREATE_TASK',
          task : {
            id: id,
            text : this.state.text
          }
        };

        this.props.dispatcher.dispatch(action);
        this.setState({text: ''});
    },

    render: function()
    {
        return (
            React.createElement('form',
                {
                    className: 'taskForm',
                    onSubmit: this.handleSubmit
                },

                React.createElement(
                    'input',
                    {
                        className: 'taskInput',
                        type: 'text',
                        placeholder: 'new task',
                        value: this.state.text,
                        onChange: this.handleTextChange
                    }
                ),
                React.createElement(
                    'input',
                    {
                        type: 'submit',
                        value: 'add',
                        className: 'taskSubmit',
                    })

            )
        );
    }
});


ReactDOM.render(
    React.createElement(taskCreateFormClass, {dispatcher : dispatcher}),
    document.getElementById('taskCreateForm')
);
