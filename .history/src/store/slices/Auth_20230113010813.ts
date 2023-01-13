import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AccountResponse } from "../../types"

type State = {
    token: string | null;
    refreshToken: string | null;
    account: AccountResponse | null;
};

const initialState: State = { token: null};