import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from './helper.js';



export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,

    },
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,

        }
        console.log(state.recipe);
    } catch (err) {
        console.error(`${err} 🔥🔥🔥`);
        throw err;
    }
};

////////////////////   Adding search functionality
export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data);


        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });
        // console.log(state.search.results);
    } catch (err) {
        console.error(`${err}  🔥🔥🔥`);
        throw err;
    }
}


export const getSearchResultPage = function (page = state.search.state) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;//0
    const end = (page * state.search.resultsPerPage);//0
    return state.search.results.slice(start, end)
}