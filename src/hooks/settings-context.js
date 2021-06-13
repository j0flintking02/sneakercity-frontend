import React from "react";

export const settings = {
    app_name: 'sneaker city'
};

export const SettingsContext = React.createContext(
    settings.app_name
);
