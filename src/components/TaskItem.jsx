import { useState } from 'react';
import { useUpdateTask, useDeleteTask } from '../api/Task';
import { cn } from '../lib/utils';
import { toast } from 'sonner';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Button } from './ui/button';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(task.description);
    const updateTask = useUpdateTask();
    const deleteTask = useDeleteTask();

    const handleToggleComplete = () => {
        updateTask.mutate({
            id: task.id,
            isComplete: !task.isComplete
        }, {
            onSuccess: () => {
                toast(`${task.isComplete ? 'Task unchecked' : 'Donezo!'}`,
                    {
                        description: task.isComplete ? 'You can continue working on it.' : 'Great job!',
                        style: {
                            backgroundColor: task.isComplete ? '#f0f4ff' : '#e6fffa',
                            color: task.isComplete ? '#1e3a8a' : '#065f46',
                        },
                        icon: task.isComplete ? '✅' : '🎉',
                    }
                );
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask.mutate({
            id: task.id,
            description
        }, {
            onSuccess: () => {
                setIsEditing(false);
                toast.success('Task updated successfully');
            }
        });
    };

    const handleDelete = () => {
        deleteTask.mutate(task.id, {
            onSuccess: () => {
                toast.success('Task deleted successfully');
            }
        });
    };

    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
            <Checkbox
                checked={task.isComplete}
                onCheckedChange={handleToggleComplete}
                className="w-5 h-5 rounded-md"
            />

            {isEditing ? (
                <form onSubmit={handleUpdate} className="flex-1 flex gap-2">
                    <Input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        variant="default"
                        className="bg-green-500 hover:bg-green-600"
                    >
                        Save
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </Button>
                </form>
            ) : (
                <>
                    <p className={cn(
                        "flex-1",
                        task.isComplete && "line-through text-gray-500"
                    )}>
                        {task.description}
                    </p>
                    <Button
                        onClick={() => setIsEditing(true)}
                        variant="ghost"
                        className=""
                    >
                        Edit
                    </Button>
                </>
            )}

            <Button
                onClick={handleDelete}
                variant="ghost"
                className="text-red-500 hover:bg-red-50 hover:text-red-500"
            >
                Delete
            </Button>
        </div>
    );
};

export default TaskItem;
