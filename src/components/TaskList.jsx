import TaskItem from './TaskItem';
import { useGetTasks } from '../api/Task';

const TaskList = ({ showCompleted = false }) => {
    const { data: tasks, isLoading, isError } = useGetTasks();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-4 text-center text-red-500">
                Error loading tasks. Please try again later.
            </div>
        );
    }

    const filteredTasks = tasks?.filter(task => task.isComplete === showCompleted) || [];

    if (filteredTasks.length === 0) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-400 p-8">
                {showCompleted
                    ? "No completed tasks yet"
                    : "No active tasks. Add one above!"}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
