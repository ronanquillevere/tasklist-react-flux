var taskBadgeClass = React.createClass(
{
    displayName: 'taskBadge',

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
        return (
            React.createElement('div',
                {
                    className: 'taskBadge'
                },
                this.state.tasks.length
            )
        );
    }
});

ReactDOM.render(
    React.createElement(taskBadgeClass, {dispatcher: dispatcher}),
    document.getElementById('taskBadge')
);
