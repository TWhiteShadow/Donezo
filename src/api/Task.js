import { toast } from 'sonner';
import api from './Axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const getTasks = async () => {
    const response = await api.get('');
    return response.data;
};

const createTask = async (newTask) => {
    const response = await api.post('', newTask);
    return response.data;
};

const updateTask = async ({ id, ...updates }) => {
    const response = await api.put(`/${id}`, updates);
    return response.data;
};

const deleteTask = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};

const deleteAllCompletedTasks = async ({ queryClient }) => {
    return toast.promise(
        (async () => {
            const tasks = await getTasks();
            const completedTasks = tasks.filter(task => task.isComplete);
            await Promise.all(completedTasks.map(task => deleteTask(task.id)));
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        })(),
        {
            loading: 'Deleting completed tasks...',
            success: 'All completed tasks deleted!',
            error: 'Failed to delete tasks'
        }
    );
};

export const useDeleteAllCompletedTasks = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => deleteAllCompletedTasks({ queryClient }),
    });
}

export const useGetTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
    });
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            toast.success('Task created successfully');
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
};


