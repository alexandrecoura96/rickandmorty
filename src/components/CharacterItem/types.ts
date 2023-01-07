export interface ICharacterItem {
  image?: string | null;
  name?: string | null;
  originLabel?: string | null;
  origin?: string | null;
  statusLabel?: string | null;
  status?: string | null;
  onPress?: (value?: string | null) => void;
  statusColor?: string | null;
  id?: string | null;
  loading?: boolean;
}
