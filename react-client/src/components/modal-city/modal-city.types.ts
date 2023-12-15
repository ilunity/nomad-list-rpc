import {ICity} from "../../api/cards.types.ts";

export interface ModalCityProps {
  onClose: () => void;
  city: ICity | null;
}
