import { useState, useMemo } from 'react'
import {
  MapPin,
  Calendar,
  Car,
  ArrowLeftRight,
  Check,
  Info,
  Users,
} from 'lucide-react'
import {
  VEHICLES,
  FLOOR_OPTIONS,
  COMMON_LOCATIONS,
  BOOKING_NOTE,
  ESTIMATE_DISCLAIMERS,
} from '../../data/content'
import {
  calculateFare,
  estimateDistance,
  estimateTravelTime,
  formatCurrency,
  cn,
} from '../../lib/utils'
import { Button } from '../ui/Button'

type TripType = 'oneway' | 'roundtrip'

interface BookingForm {
  tripType: TripType
  from: string
  to: string
  vehicleId: string
  travelDate: string
  passengers: number
  floor: string
  name: string
  phone: string
}

const initialForm: BookingForm = {
  tripType: 'oneway',
  from: 'Chennai',
  to: '',
  vehicleId: 'sedan',
  travelDate: '',
  passengers: 1,
  floor: FLOOR_OPTIONS[0],
  name: '',
  phone: '',
}

interface BookingWidgetProps {
  compact?: boolean
}

export function BookingWidget({ compact = false }: BookingWidgetProps) {
  const [form, setForm] = useState<BookingForm>(initialForm)
  const [showResult, setShowResult] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const vehicle = VEHICLES.find((v) => v.id === form.vehicleId) ?? VEHICLES[1]

  const estimate = useMemo(() => {
    if (!form.from || !form.to) return null
    const distance = estimateDistance(form.from, form.to)
    const fare = calculateFare(
      distance,
      vehicle.baseFare,
      vehicle.driverBata,
      form.tripType,
    )
    return { distance, travelTime: estimateTravelTime(distance), fare }
  }, [form.from, form.to, form.tripType, vehicle])

  const update = <K extends keyof BookingForm>(key: K, value: BookingForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setShowResult(false)
    setSubmitted(false)
  }

  const swapLocations = () => {
    if (form.to) setForm((prev) => ({ ...prev, from: prev.to, to: prev.from }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.from && form.to && form.travelDate) setShowResult(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app-card overflow-hidden">
      {!compact && (
        <div className="border-b border-navy-100 bg-white px-4 py-4 sm:px-5">
          <h2 className="font-bold text-navy-950">Book Your Ride</h2>
          <p className="mt-0.5 text-xs text-navy-500">One-way & round trip · Instant fare estimate</p>
        </div>
      )}

      <form onSubmit={handleSearch} className="p-4 sm:p-6">
        <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-navy-50 p-1">
          {(['oneway', 'roundtrip'] as TripType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => update('tripType', type)}
              className={cn(
                'rounded-lg py-3 text-sm font-semibold transition-colors',
                form.tripType === type ? 'chip-active shadow-sm' : 'text-navy-500 hover:text-navy-800',
              )}
            >
              {type === 'oneway' ? 'One Way' : 'Round Trip'}
            </button>
          ))}
        </div>

        <div className="space-y-3 lg:space-y-0">
          <div className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:gap-3">
            <Field label="From" icon={MapPin}>
              <select
                value={form.from}
                onChange={(e) => update('from', e.target.value)}
                className="input-field"
              >
                {COMMON_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </Field>

            <div className="flex justify-center py-1 lg:pb-3">
              <button
                type="button"
                onClick={swapLocations}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white shadow-sm transition-colors hover:border-brand-500 hover:bg-brand-50"
                aria-label="Swap locations"
              >
                <ArrowLeftRight className="h-4 w-4 text-navy-700" />
              </button>
            </div>

            <Field label="To" icon={MapPin}>
              <select
                value={form.to}
                onChange={(e) => update('to', e.target.value)}
                className="input-field"
                required
              >
                <option value="">Select destination</option>
                {COMMON_LOCATIONS.filter((l) => l !== form.from).map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </Field>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Vehicle" icon={Car}>
            <select
              value={form.vehicleId}
              onChange={(e) => update('vehicleId', e.target.value)}
              className="input-field"
            >
              {VEHICLES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} — {formatCurrency(v.baseFare)}/km
                </option>
              ))}
            </select>
          </Field>

          <Field label="Travel Date" icon={Calendar}>
            <input
              type="date"
              value={form.travelDate}
              onChange={(e) => update('travelDate', e.target.value)}
              className="input-field"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </Field>

          <Field label="Passengers" icon={Users} className="sm:col-span-2">
            <select
              value={form.passengers}
              onChange={(e) => update('passengers', Number(e.target.value))}
              className="input-field"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Button type="submit" size="lg" className="mt-6 w-full">
          Search Cars
        </Button>
      </form>

      {showResult && estimate && (
        <div className="border-t border-navy-100 bg-navy-50/60 p-4 sm:p-6">
          <div className="rounded-2xl bg-navy-950 p-4 text-white sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-navy-400">
              Estimated fare
            </p>
            <p className="mt-1 text-3xl font-black text-brand-500 sm:text-4xl">
              {formatCurrency(estimate.fare)}
            </p>
            <p className="mt-2 text-sm text-navy-300">
              {form.from} → {form.to}
              {form.tripType === 'roundtrip' ? ' · Round Trip' : ''}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 sm:gap-3">
              <div>
                <p className="text-[10px] uppercase text-navy-500">Distance</p>
                <p className="text-sm font-semibold">{estimate.distance} km</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-navy-500">Duration</p>
                <p className="text-sm font-semibold">{estimate.travelTime}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-navy-500">Vehicle</p>
                <p className="text-sm font-semibold">{vehicle.name}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-1.5">
            {ESTIMATE_DISCLAIMERS.map((note) => (
              <p key={note} className="flex items-start gap-2 text-xs text-navy-500">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" />
                {note}
              </p>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <p className="text-sm font-bold text-navy-950">Your Details</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="input-field"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className="input-field"
                required
              />
            </div>
            {submitted ? (
              <div className="flex items-center gap-2 rounded-xl bg-brand-100 p-4 text-sm font-medium text-navy-900">
                <Check className="h-5 w-5 shrink-0 text-brand-700" />
                Booking request sent! We&apos;ll call you at {form.phone} shortly.
              </div>
            ) : (
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Confirm Booking
              </Button>
            )}
          </form>

          <p className="mt-4 text-[11px] leading-relaxed text-navy-500">
            <strong>Note:</strong> {BOOKING_NOTE}
          </p>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  icon: Icon,
  children,
  className,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-600">
        <Icon className="h-3.5 w-3.5 text-brand-600" />
        {label}
      </label>
      {children}
    </div>
  )
}
