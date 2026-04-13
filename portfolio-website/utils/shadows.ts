export function getCardShadow(id: string, selectedId: string | null, hoveredId: string | null): string {
  if (selectedId === id) return '0 8px 24px -4px rgba(0,0,0,0.22)';
  if (hoveredId === id) return '0 4px 14px -4px rgba(0,0,0,0.14)';
  return 'none';
}
