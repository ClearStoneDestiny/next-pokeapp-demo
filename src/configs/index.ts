const configs = {
  PAGINATION: {
    DEFAULT_POKEMON_LIMIT: 20,
  },

  VALIDATION: {
    PASSWORD_MIN_LENGTH: 8,
  },

  ROUTES: {
    DASHBOARD: "/dashboard",
    LOGIN: "/login",
    REGISTER: "/register",
    LANDING: "/",
    PRICING: "/pricing",
    COLLECTIONS: "/collection",
    POKEMON_DETAILS: "/pokemon",
    SHOP: "/shop",
  },

  ROUTE_BUILDERS: {
    POKEMON_DETAILS: (id: number) => `/pokemon/${id}`,
  },
};

export default configs;
