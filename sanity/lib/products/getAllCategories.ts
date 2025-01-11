import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
        *[
            _type == "category"
            ] | order(name asc)
  `);

  try {
    const Categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    return Categories.data || [];
    
  } catch (error) {
    console.error("Error fetching all Categories: ", error);
    return [];
  }
};
