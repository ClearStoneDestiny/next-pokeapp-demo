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
    LANDING: "/",
    PRICING: "/pricing",
    COLLECTIONS: "/collection",
    POKEMON_DETAILS: (id: number) => `/pokemon/${id}`,
    SHOP: "/shop",
  },
};

export default configs;
