import React from 'react';
import { SvgProps } from 'react-native-svg';
import home from "../../../assets/icons/home.svg";
import search from "../../../assets/icons/search.svg";
import settings from "../../../assets/icons/settings.svg";

// Mapping icon names to their corresponding SVG components
const svgs = {
    home,
    settings,
    search,
};

type IconType = SvgProps & {
    name: keyof typeof svgs; // Ensures only valid keys from `svgs` are accepted
    h?: number;             // Height (overrides size if provided)
    w?: number;             // Width (overrides size if provided)
    size?: number;          // Uniform size (overrides both h and w)
    color?: string;         // Icon color
};

const Icon: React.FC<IconType> = ({
    name,
    h = 24,
    w = 24,
    size,
    color = "black",
    ...props
}: IconType) => {
    const IconComponent = svgs[name] || svgs['home'];

    return (
        <IconComponent
            width={size || w}
            height={size || h}
            fill={color}
            {...props}
        />
    );
};

export default Icon;
