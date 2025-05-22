import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const ActiveTasks = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Active Tasks</h1>
                <p className="text-slate-600">Manage your ongoing tasks</p>
            </div>

            <div className="space-y-6">
                <TaskInput />
                <TaskList showCompleted={false} />
                <hr></hr>
                <TaskList showCompleted={true} />
            </div>
        </div>
    );
};

export default ActiveTasks;