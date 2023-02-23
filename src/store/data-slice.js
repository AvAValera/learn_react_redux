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
export default shop.reducer;