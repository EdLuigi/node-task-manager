const getAllTasks = (req, res) => {
    res.send("get all tasks");
};

const getTask = (req, res) => {
    res.send(`get id: ${req.params.id}`);
};

const createTask = (req, res) => {
    res.json(req.body);
};

const updateTask = (req, res) => {
    res.json(req.body);
};

const deleteTask = (req, res) => {
    res.send(`delete id: ${req.params.id}`);
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
