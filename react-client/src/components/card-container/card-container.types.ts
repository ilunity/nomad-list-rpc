import {ICityPreview} from "../../api/cards.types.ts";

export interface CardContainerProps {
    cities: ICityPreview[]
    setCityName: (city: string) => void;
}
