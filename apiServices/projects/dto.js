const single = (resource, authUser) => ({
    id: resource._id,
    name: resource.name,
    usedTechnologies: resource.usedTechnologies.length > 0 ? resource.usedTechnologies : undefined
});

const multiple = (resources, authUser) => resources.map(resource => single(resource, authUser));

module.exports = {
    single,
    multiple
};