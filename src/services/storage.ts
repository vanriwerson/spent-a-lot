import type { CalculationData } from '../types';

const STORAGE_KEY = '@spentalot:data';

const defaultCalculationData: CalculationData = {
  wage: 0,
  weeklyHoursWorked: 0,
  transactions: [],
};

export function loadData(): CalculationData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return defaultCalculationData;
    }

    const parsed = JSON.parse(raw) as CalculationData;

    return {
      wage: parsed.wage ?? 0,
      weeklyHoursWorked: parsed.weeklyHoursWorked ?? 0,
      transactions: parsed.transactions ?? [],
    };
  } catch {
    return defaultCalculationData;
  }
}

export function saveData(data: CalculationData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // MVP: falha silenciosa
    // Futuro: telemetry / toast
  }
}
