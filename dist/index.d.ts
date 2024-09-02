import React$1, { MouseEventHandler, ReactElement } from 'react';

declare const Switch: () => React$1.JSX.Element;

declare const ThemeProvider: ({ themeValues, children }: any) => React$1.JSX.Element;

interface ITextBox extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    type?: string;
    containerClassName?: string;
    placeholder?: string;
}

declare const Textbox: (props: ITextBox) => React$1.JSX.Element;

interface IDate extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    type?: string;
    containerClassName?: string;
}

declare const DateBox: (props: IDate) => React$1.JSX.Element;

declare const Dropdown: (props: any) => React$1.JSX.Element;

type IRadiobutton = {
    group: any;
    value: any;
    handleClick: MouseEventHandler<HTMLInputElement>;
    checked: any;
};

declare const Radiobutton: (props: IRadiobutton) => React$1.JSX.Element;

interface IButton extends React.HTMLProps<HTMLButtonElement> {
    childern?: string;
    className?: string;
    variant?: string;
    iconLeftName?: string;
    iconRightName?: string;
}

declare const Button: (props: IButton) => React$1.JSX.Element;

interface ICheckBox extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    containerClassName?: string;
}

declare const Checkbox: (props: ICheckBox) => React$1.JSX.Element;

declare const Icon: any;

type ISnackBarOptions = {
    message: string;
    isShow: boolean;
    variant: 'error' | 'success' | 'info';
    timmer?: number;
    iconName?: string;
    iconColor?: string;
    renderComponent?: ReactElement;
};
type ISnackBar = {
    snackBarOptions: ISnackBarOptions;
    setSnackBarOptions: React$1.Dispatch<React$1.SetStateAction<ISnackBarOptions>>;
};
declare const Snackbar: (props: ISnackBar) => React$1.JSX.Element;

declare const Card: (props: any) => React$1.JSX.Element;

declare const Typography: (props: any) => React$1.JSX.Element;

declare const Svgheading: ({ iconName, value, iconColor, valueColor }: any) => React$1.JSX.Element;

declare const _default: {
    themes: {
        dark: {
            secondaryBg: {
                backgroundColor: string;
                color: string;
            };
            font: {
                color: string;
            };
            icon: {
                backgroundColor: string;
                color: string;
            };
            layoutCard: {
                backgroundColor: string;
            };
            card: {
                backgroundColor: string;
            };
            button: {
                primary: {
                    backgroundColor: string;
                    color: string;
                };
                secondary: {
                    backgroundColor: string;
                    color: string;
                };
                tertiary: {
                    backgroundColor: string;
                    color: string;
                };
                default: {
                    backgroundColor: string;
                    color: string;
                };
            };
            checkBox: {
                color: string;
                backgroundColor: string;
            };
            textbox: {
                input: {
                    backgroundColor: string;
                    color: string;
                };
                label: {
                    color: string;
                };
            };
            dropdown: {
                backgroundColor: string;
                color: string;
                isFocused: string;
                label: {
                    color: string;
                };
            };
            snackBar: {
                icon: {
                    color: string;
                };
                info: {
                    backgroundColor: string;
                    color: string;
                };
                success: {
                    backgroundColor: string;
                    color: string;
                };
                error: {
                    backgroundColor: string;
                    color: string;
                };
            };
            colors: {
                primary: string;
                primaryDark: string;
                primaryDim: string;
                secondary: string;
                secondaryDark: string;
                secondaryDim: string;
                tertiary: string;
                tertiaryDark: string;
                teriaryDim: string;
                mud: string;
                mudDim: string;
                darkModePrimaryBg: string;
                darkModeSecondaryBg: string;
                darkModePrimaryTextColor: string;
                darkModeSecondaryTextColor: string;
                lightModePrimaryBg: string;
                lightModeSecondaryBg: string;
                lightModePrimaryTextColor: string;
                lightModeSecondaryTextColor: string;
                white: string;
                black: string;
            };
        };
        light: {
            secondaryBg: {
                backgroundColor: string;
                color: string;
            };
            font: {
                color: string;
            };
            icon: {
                backgroundColor: string;
                color: string;
            };
            layoutCard: {
                backgroundColor: string;
            };
            card: {
                backgroundColor: string;
            };
            button: {
                primary: {
                    backgroundColor: string;
                    color: string;
                };
                secondary: {
                    backgroundColor: string;
                    color: string;
                };
                tertiary: {
                    backgroundColor: string;
                    color: string;
                };
                default: {
                    backgroundColor: string;
                    color: string;
                };
            };
            textbox: {
                input: {
                    backgroundColor: string;
                    color: string;
                };
                label: {
                    color: string;
                };
            };
            checkBox: {
                color: string;
                backgroundColor: string;
            };
            dropdown: {
                backgroundColor: string;
                color: string;
                isFocused: string;
                label: {
                    color: string;
                };
            };
            snackBar: {
                icon: {
                    color: string;
                };
                info: {
                    backgroundColor: string;
                    color: string;
                };
                success: {
                    backgroundColor: string;
                    color: string;
                };
                error: {
                    backgroundColor: string;
                    color: string;
                };
            };
            colors: {
                primary: string;
                primaryDark: string;
                primaryDim: string;
                secondary: string;
                secondaryDark: string;
                secondaryDim: string;
                tertiary: string;
                tertiaryDark: string;
                teriaryDim: string;
                mud: string;
                mudDim: string;
                darkModePrimaryBg: string;
                darkModeSecondaryBg: string;
                darkModePrimaryTextColor: string;
                darkModeSecondaryTextColor: string;
                lightModePrimaryBg: string;
                lightModeSecondaryBg: string;
                lightModePrimaryTextColor: string;
                lightModeSecondaryTextColor: string;
                white: string;
                black: string;
            };
        };
    };
    colors: {
        primary: string;
        primaryDark: string;
        primaryDim: string;
        secondary: string;
        secondaryDark: string;
        secondaryDim: string;
        tertiary: string;
        tertiaryDark: string;
        teriaryDim: string;
        mud: string;
        mudDim: string;
        darkModePrimaryBg: string;
        darkModeSecondaryBg: string;
        darkModePrimaryTextColor: string;
        darkModeSecondaryTextColor: string;
        lightModePrimaryBg: string;
        lightModeSecondaryBg: string;
        lightModePrimaryTextColor: string;
        lightModeSecondaryTextColor: string;
        white: string;
        black: string;
    };
};

export { Button, Card, Checkbox, DateBox as Datebox, Dropdown, type ISnackBar, type ISnackBarOptions, Icon, Radiobutton, Snackbar, Svgheading, Switch, Textbox, ThemeProvider, _default as ThemesConfig, Typography };
