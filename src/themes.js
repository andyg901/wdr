export const getTheme = (color = 'red') => {
    return {
        headerBackgroundColor: `bg-${color}-600`,
        bodyBackgroundColor: `bg-${color}-300`,
        buttonBackgroundColor: `bg-white`,
        buttonTextColor: `text-${color}-600`,
        textColor: "text-white",
        themeName: `${color[0].toUpperCase()}${color.slice(1)}`
    };
}