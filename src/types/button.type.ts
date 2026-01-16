import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
    type : string;
    textStyle ?: string;
    valueIcon ?: IconDefinition;
    valueText ?: string;
} & React.HTMLAttributes<HTMLButtonElement>;