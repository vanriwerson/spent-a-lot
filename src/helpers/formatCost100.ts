export function formatCost100(hours: number): string {
  const totalMinutes = Math.round(hours * 60);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;

  return `${String(h).padStart(2, '0')}h e ${String(m).padStart(2, '0')}m`;
}
