import {createSlice} from "@reduxjs/toolkit";

import {IThemeState} from "../../interfaces";

const initialState: IThemeState = {
    blackTheme: false,
    darkNightTheme: false,
    darkRichTheme: false,
    lightTheme: false,
    redTheme: false,
    snowTheme: false
}
const themeToggleSlice = createSlice({
    initialState,
    name: "themeToggle",
    reducers: {
        changeTheme: (state, action) => {

            switch (action.payload) {
                case 0:
                    state.lightTheme = true;
                    state.redTheme = false;
                    state.snowTheme = false;
                    state.darkRichTheme = false;
                    state.darkNightTheme = false;
                    state.blackTheme = false;
                    break
                case 1:
                    state.lightTheme = false;
                    state.redTheme = true;
                    state.snowTheme = false;
                    state.darkRichTheme = false;
                    state.darkNightTheme = false;
                    state.blackTheme = false;
                    break
                case 2:
                    state.lightTheme = false;
                    state.redTheme = false;
                    state.snowTheme = true;
                    state.darkRichTheme = false;
                    state.darkNightTheme = false;
                    state.blackTheme = false;
                    break
                case 3:
                    state.lightTheme = false;
                    state.redTheme = false;
                    state.snowTheme = false;
                    state.darkRichTheme = true;
                    state.darkNightTheme = false;
                    state.blackTheme = false;
                    break
                case 4:
                    state.lightTheme = false;
                    state.redTheme = false;
                    state.snowTheme = false;
                    state.darkRichTheme = false;
                    state.darkNightTheme = true;
                    state.blackTheme = false;
                    break
                case 5:
                    state.lightTheme = false;
                    state.redTheme = false;
                    state.snowTheme = false;
                    state.darkRichTheme = false;
                    state.darkNightTheme = false;
                    state.blackTheme = true;
                    break
                default:
                    state.lightTheme = true;
            }


        }
    }
});
const {
    reducer: themeReducer, actions: {
        changeTheme,

    }
} = themeToggleSlice;

export {
    themeReducer,
    changeTheme,

};