import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PEOPLE_URL = "https://swapi.dev/api/people";
const initialState = { people: [], status: null };

export const fetchPeople = createAsyncThunk("people/fetchPeople", async () => {
  const res = await axios.get(PEOPLE_URL);
  return [...res.data.results];
});

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson(state, action) {
      state.people.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.staus = "succeeded";
        const loadedPeople = action.payload;
        state.people = loadedPeople;
      })
      .addCase(fetchPeople.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {addPerson} = peopleSlice.actions

export default peopleSlice;
