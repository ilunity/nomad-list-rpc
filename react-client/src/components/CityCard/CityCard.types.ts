import {ICityPreview} from "../../api/cards.types.ts";

export interface CityCardProps {
    city: ICityPreview;
    setCityName: (city: string) => void;
}
