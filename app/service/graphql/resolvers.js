// Build the graphql query based on rest service
const getProperties = async (_, args, { dataSources }) => {
    const { city } = args || {};

    return await dataSources.restService.getPropertiesByCity(city);
};

export const resolvers = { Query: { getProperties } };
