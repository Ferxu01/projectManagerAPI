const single = technology => ({
    id: technology._id,
    name: technology.name
});

const multiple = technologies => technologies.map(t => single(t));

module.exports = { single, multiple };