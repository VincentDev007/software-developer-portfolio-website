export function getCardShadow(id: string, selectedId: string | null, hoveredId: string | null): string {
  if (selectedId === id) return '0 10px 30px -4px rgba(0,0,0,0.32)';
  if (hoveredId === id) return '0 6px 20px -4px rgba(0,0,0,0.22)';
  return '0 2px 10px -2px rgba(0,0,0,0.12)';
}
