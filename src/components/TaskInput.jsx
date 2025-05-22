import { useState } from "react";
import { useCreateTask } from "../api/Task";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const TaskInput = () => {
    const [task, setTask] = useState('');
    const { mutate: createTask, isLoading } = useCreateTask();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task.trim()) {
            createTask({ description: task.trim(), isComplete: false });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center mb-4">
            <Input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
                className=""
                disabled={isLoading}
            />
            <Button
                type="submit"
                className="ml-2 px-4 py-2 rounded-lg text-white disabled:opacity-50"
                disabled={!task.trim() || isLoading}
            >
                {isLoading ? 'Adding...' : 'Add Task'}
            </Button>
        </form>
    );
}

export default TaskInput;