// Этот файл содержит централизованные данные для всех динамических маршрутов Geo-Service.

export const cityLocations = [
  // === NORTH CAROLINA (NC) ===
  // Special Case: Charlotte redirects to the homepage
  {
    city_slug: "charlotte",
    state_abbr: "NC",
    city_display: "Charlotte",
    redirect: true,
  },

  // NC Cities
  {
    city_slug: "gastonia",
    state_abbr: "NC",
    city_display: "Gastonia",
    redirect: false,
  },
  {
    city_slug: "concord",
    state_abbr: "NC",
    city_display: "Concord",
    redirect: false,
  },
  {
    city_slug: "matthews",
    state_abbr: "NC",
    city_display: "Matthews",
    redirect: false,
  },

  // === SOUTH CAROLINA (SC) ===
  {
    city_slug: "rock-hill",
    state_abbr: "SC",
    city_display: "Rock Hill",
    redirect: false,
  },
  {
    city_slug: "fort-mill",
    state_abbr: "SC",
    city_display: "Fort Mill",
    redirect: false,
  },
  // ... Add all other cities from your list ...
];

// All Categories available in every city (English for SEO/Structure)
export const serviceCategories = [
  { category_slug: "painting", category_display: "Painting Services" },
  { category_slug: "remodeling", category_display: "Home Remodeling" },
];

// All Services (English for SEO/Structure)
export const allServices = [
  {
    category_slug: "painting",
    service_slug: "interior",
    service_display: "Interior Painting",
  },
  {
    category_slug: "painting",
    service_slug: "exterior",
    service_display: "Exterior Painting",
  },
  {
    category_slug: "remodeling",
    service_slug: "kitchen",
    service_display: "Kitchen Remodeling",
  },
  {
    category_slug: "remodeling",
    service_slug: "bathroom",
    service_display: "Bathroom Remodeling",
  },
];

// Auxiliary function to get city data by slug
export function getCityData(slug) {
  return cityLocations.find((c) => c.city_slug === slug);
}

// ИСПРАВЛЕНО: Теперь используем cityLocations вместо неопределенной localAreas
export const getLocalAreaByKey = (key) => {
  return cityLocations.find((area) => area.key === key);
};

export const getLocalAreasByState = (state) => {
  return cityLocations.filter((area) => area.state === state);
};

export const getNearbyAreas = (maxDistance = 30) => {
  // ВНИМАНИЕ: Для этих функций cityLocations должен содержать поля 'key', 'state', 'distance'.
  // Если этих полей нет, эти функции могут работать некорректно.
  return cityLocations.filter((area) => area.distance <= maxDistance);
};
