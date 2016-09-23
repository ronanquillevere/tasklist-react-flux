var TaskStore = function(dispatcher)
{
    var store = [];

    var listeners = [];

    var addTask = function(e)
    {
        var task= e.task;
        store.push(task);
        console.log('Task added to store: ' + task.text);
		dispatcher.dispatch({type : 'TASK_STORE_UPDATED', tasks : store});
    };

    var removeTask = function(e)
    {
        var task= e.task;
        store.splice(store.indexOf(task), 1);
        console.log('Task removed from store: ' + task.text);
        dispatcher.dispatch({type : 'TASK_STORE_UPDATED', tasks : store});
    };

    dispatcher.subscribe('CREATE_TASK', addTask);
    dispatcher.subscribe('DELETE_TASK', removeTask);

    return {

    };
};

var taskStore = new TaskStore(dispatcher);
