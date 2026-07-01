import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function estimateDistance(from: string, to: string): number {
  const key1 = `${from}-${to}`
  const key2 = `${to}-${from}`
  if (ROUTE_LOOKUP[key1]) return ROUTE_LOOKUP[key1]
  if (ROUTE_LOOKUP[key2]) return ROUTE_LOOKUP[key2]

  const hash = (from + to).split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return 80 + (hash % 420)
}

const ROUTE_LOOKUP: Record<string, number> = {
  'Chennai-Ooty': 555,
  'Chennai-Coimbatore': 495,
  'Chennai-Vellore': 140,
  'Chennai-Trichy': 330,
  'Chennai-Bangalore': 345,
  'Chennai-Madurai': 460,
  'Chennai-Pondicherry': 160,
  'Chennai-Kodaikanal': 520,
  'Chennai-Kanyakumari': 705,
  'Chennai-Erode': 400,
  'Chennai-Salem': 340,
  'Chennai-Tirupati': 135,
  'Chennai-Mahabalipuram': 60,
}

export function estimateTravelTime(distanceKm: number): string {
  const hours = distanceKm / 55
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  if (h === 0) return `${m} min`
  if (m === 0) return `${h} hr`
  return `${h} hr ${m} min`
}

export function calculateFare(
  distanceKm: number,
  baseFarePerKm: number,
  driverBata: number,
  tripType: 'oneway' | 'roundtrip',
): number {
  const multiplier = tripType === 'roundtrip' ? 1.85 : 1
  const base = distanceKm * baseFarePerKm * multiplier
  const bata = driverBata * (tripType === 'roundtrip' ? 2 : 1)
  const gst = (base + bata) * 0.05
  return Math.round(base + bata + gst)
}
