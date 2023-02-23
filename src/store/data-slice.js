import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const url_product = "https://api.escuelajs.co/api/v1/products";
export const getProducts = createAsyncThunk(
    "@@store/getdata",
    async () => {
            const res = await fetch(url_product);
            return await res.json();
    }
)

export const shop = createSlice({
    name: "@@store",
    initialState: {
        entities: [],
        status: "idle",
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state["entities"] = action.payload;
            state.status = "received";
        })
    }
})
export const selectData = (state) => state.shop;
export const selectFilterData = (state, {search = '', category = '', price = ''}) => {
    const result = state.filter(product => product.title.toLowerCase().includes(search.toLowerCase()) && 
        product.category.name.includes(category))
    if(price === "Low"){
        result.sort((a, b) => a.price > b.price ? 1 : -1)
        return result;
    }
    if(price === "High"){
        result.sort((a, b) => a.price < b.price ? 1 : -1)
        return result;
    }
    
    return result;
}

export default shop.reducer;