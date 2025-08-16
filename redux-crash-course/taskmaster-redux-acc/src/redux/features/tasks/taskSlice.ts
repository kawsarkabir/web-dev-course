import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'ggggggggg',
            description: 'hhhhhhhhhhh',
            date: '2025-08-15',
            assignedTo: 'Mir Hussain',
            priority: 'high'
        }
    ],
    userTasks: []
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload })
            } else {
                const lastElements = state.tasks.at(-1)
                state.tasks.push({ id: lastElements.id + 1, status: "pending", ...payload })
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks.filter(item => item.id !== payload)
        },
        updateStatus: (state, { payload }) => {
            const updatedStatus = state.tasks.find(item => item.id === payload.id)
            updatedStatus.status = payload.status
        },
        userTask: (state, { payload }) => {
            state.userTasks = state.tasks.filter(item => item.assignedTo === payload)
        }
    }
})

export const { addTask, removeTask, updateStatus, userTask } = tasksSlice.actions
export default tasksSlice.reducer 