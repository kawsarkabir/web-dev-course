const logger = (store) => (next) => (action) => {
    console.log("%c Previous State:", "color: gray;", store.getState());
    console.log("%c Dispatching Action:", "color: blue; font-weight: bold;", action);

    const result = next(action); // pass the action to the next middleware/reducer

    console.log("%c Next State:", "color: green;", store.getState());

    return result;
}
export default logger