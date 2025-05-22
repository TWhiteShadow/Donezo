import { Button } from '@/components/ui/button';
import TaskList from '../components/TaskList';
import { useDeleteAllCompletedTasks, useGetTasks } from '@/api/Task';

const CompletedTasks = () => {
    const deleteAllCompletedTasks = useDeleteAllCompletedTasks();
    const { data: tasks } = useGetTasks();
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Completed Tasks</h1>
                    <p>View and manage your completed tasks</p>
                </div>
                <Button
                    disabled={!tasks?.some((task) => task.isComplete)}
                    className=""
                    value="Delete All Completed"
                    variant="destructive"
                    onClick={() => {
                        deleteAllCompletedTasks.mutate(undefined);
                    }}
                >
                    Delete All Completed
                </Button>
            </div>

            <TaskList showCompleted={true} />
        </div>
    );
}

export default CompletedTasks;