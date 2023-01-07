export interface IResultCardItem {
  id?: string | null;
  title?: string | null;
  description?: string | number | null;
  descriptionLabel?: string | null;

  onPress?: (value?: string | null) => void;
}
