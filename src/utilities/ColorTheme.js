import React from "react";

export const ColorThemeObj = {
    backgroundColor: "#F0F1F1",
    titleFontColor: "#5E5322",
    accentColor: "#FAD648",
    fontColor: "#3C3C3C",
    backgroundSecondaryColor: "#737373"
};

export const ColorTheme = React.createContext({
    ...ColorThemeObj,
});
