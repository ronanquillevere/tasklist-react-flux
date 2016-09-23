var taskListClass = React.createClass(
{
    displayName: 'taskList',

    getInitialState: function()
    {
        return {
            tasks: []
        };
    },

    componentDidMount: function()
    {
        this.props.dispatcher.subscribe('TASK_STORE_UPDATED', this._onTaskStoreUpdated);
    },

    _onTaskStoreUpdated: function(e)
    {
        this.setState(
        {
            tasks: e.tasks
        });
    },

    render: function()
    {
        var that = this;
        var taskNodes = this.state.tasks.map(function(task)
        {
            var onDelete = function()
            {
                var action = {
                  type : 'DELETE_TASK',
                  task : task
                };
                that.props.dispatcher.dispatch(action);
            };

            return React.createElement(
                'div',
                {
                    className: 'task',
                    key: task.id,
                },
                task.text,
                React.createElement('Button',
                    {
                        className: 'taskDeleteButton',
                        onClick: onDelete
                    },
                    React.createElement('i',
                    {
                        className: 'fa fa-close'
                    }))
            );
        });

        return (
            React.createElement('div',
                {
                    className: 'taskList'
                },
                taskNodes
            )
        );
    }
});

ReactDOM.render(
    React.createElement(taskListClass, {dispatcher : dispatcher}),
    document.getElementById('taskList')
);
