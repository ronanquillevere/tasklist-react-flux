var Dispatcher = function(taskStore)
{

	var _actionSubject = new Rx.ReplaySubject(1);

    return {

        dispatch : function(action)
        {
        	_actionSubject.onNext(action);
        },

        subscribe : function(type, onAction)
        {
        	if (typeof onAction !== 'function')
                throw Error('Invalid action callback');

             var observable = _actionSubject
                .filter(function filterEvent(event)
                {
                    return (typeof event === 'object') && event.type === type;
                });

            return observable.subscribe(onAction);
        }
    };

};

var dispatcher = new Dispatcher();