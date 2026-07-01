import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ArrowLeft,
  Info,
  ArrowLeftRight,
  Check,
  Sparkles,
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
type Step = 1 | 2 | 3 | 4

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
  email: string
}

const STEP_LABELS = ['Route', 'Vehicle', 'Details', 'Confirm']

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
  email: '',
}

const vehicleImages: Record<string, string> = {
  hatchback:
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=240&fit=crop',
  sedan:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=240&fit=crop',
  xuv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=240&fit=crop',
}

export function BookingWidget() {
  const [form, setForm] = useState<BookingForm>(initialForm)
  const [step, setStep] = useState<Step>(1)
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
    setSubmitted(false)
  }

  const swapLocations = () => {
    if (form.to) {
      setForm((prev) => ({ ...prev, from: prev.to, to: prev.from }))
    }
  }

  const canProceed = () => {
    if (step === 1) return form.from && form.to
    if (step === 2) return !!form.vehicleId
    if (step === 3) return !!form.travelDate
    return true
  }

  const next = () => {
    if (step < 4 && canProceed()) setStep((s) => (s + 1) as Step)
  }

  const back = () => {
    if (step > 1) setStep((s) => (s - 1) as Step)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      id="booking"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.25)] sm:rounded-[1.75rem] sm:shadow-[0_32px_64px_rgba(0,0,0,0.35)]"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-navy-900 to-navy-800 px-4 py-4 sm:px-6 sm:py-5">
        <div className="relative space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20">
                <Sparkles className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  Instant Booking
                </h3>
                <p className="text-xs text-navy-400">Fare estimate in seconds</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-white/5 p-1">
              {(['oneway', 'roundtrip'] as TripType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => update('tripType', type)}
                  className={cn(
                    'touch-target rounded-lg py-2.5 text-xs font-semibold transition-all sm:px-3 sm:py-1.5',
                    form.tripType === type
                      ? 'bg-brand-500 text-navy-950 shadow-lg'
                      : 'text-navy-400 active:text-white',
                  )}
                >
                  {type === 'oneway' ? 'One Way' : 'Round Trip'}
                </button>
              ))}
            </div>
          </div>

          {/* Step indicator */}
          <div>
            <p className="mb-2 text-center text-xs font-medium text-brand-300 sm:hidden">
              Step {step} of 4 · {STEP_LABELS[step - 1]}
            </p>
            <div className="flex items-center gap-1 sm:gap-0">
              {[1, 2, 3, 4].map((s, i) => (
                <div key={s} className="flex flex-1 items-center">
                  <div
                    className={cn(
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all sm:h-9 sm:w-9',
                      step >= s
                        ? 'bg-brand-500 text-navy-950 shadow-lg shadow-brand-500/30'
                        : 'bg-white/10 text-navy-500',
                    )}
                  >
                    {step > s ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : s}
                  </div>
                  {i < 3 && (
                    <div
                      className={cn(
                        'h-0.5 flex-1 rounded-full transition-colors',
                        step > s ? 'bg-brand-500' : 'bg-white/10',
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-1.5 hidden justify-between sm:flex">
              {STEP_LABELS.map((label, i) => (
                <span
                  key={label}
                  className={cn(
                    'flex-1 text-center text-[10px] font-medium uppercase tracking-wider',
                    step >= i + 1 ? 'text-brand-300' : 'text-navy-600',
                  )}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-5 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <StepPanel key="step1">
              <h4 className="mb-4 font-display text-base font-bold text-navy-900">
                Where are you traveling?
              </h4>
              <div className="space-y-3">
                <Field label="Pickup" icon={MapPin}>
                  <select
                    value={form.from}
                    onChange={(e) => update('from', e.target.value)}
                    className="input-premium"
                  >
                    {COMMON_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </Field>

                <div className="relative py-1">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-navy-100" />
                  <div className="relative flex justify-center">
                    <button
                      type="button"
                      onClick={swapLocations}
                      className="touch-target flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white shadow-md active:bg-brand-50"
                      aria-label="Swap locations"
                    >
                      <ArrowLeftRight className="h-4 w-4 text-brand-600" />
                    </button>
                  </div>
                </div>

                <Field label="Drop-off" icon={MapPin}>
                  <select
                    value={form.to}
                    onChange={(e) => update('to', e.target.value)}
                    className="input-premium"
                    required
                  >
                    <option value="">Select destination</option>
                    {COMMON_LOCATIONS.filter((l) => l !== form.from).map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </StepPanel>
          )}

          {step === 2 && (
            <StepPanel key="step2">
              <h4 className="mb-4 font-display text-base font-bold text-navy-900">
                Choose your vehicle
              </h4>
              <div className="space-y-3">
                {VEHICLES.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => update('vehicleId', v.id)}
                    className={cn(
                      'flex w-full flex-col overflow-hidden rounded-2xl border text-left transition-all active:scale-[0.99] sm:flex-row sm:items-center sm:gap-4 sm:p-3',
                      form.vehicleId === v.id
                        ? 'border-brand-400 bg-brand-50/50 ring-2 ring-brand-500/20'
                        : 'border-navy-100 active:bg-navy-50/50',
                    )}
                  >
                    <img
                      src={vehicleImages[v.id]}
                      alt={v.name}
                      className="h-36 w-full object-cover sm:h-16 sm:w-24 sm:rounded-xl"
                    />
                    <div className="flex flex-1 items-start justify-between gap-3 p-4 sm:p-0 sm:pr-3">
                      <div className="min-w-0">
                        <p className="font-display font-bold text-navy-900">{v.name}</p>
                        <p className="mt-0.5 truncate text-xs text-navy-500">{v.models}</p>
                        <p className="mt-1.5 text-sm font-semibold text-brand-600">
                          {formatCurrency(v.baseFare)}/km · {v.capacity} seats
                        </p>
                      </div>
                      {form.vehicleId === v.id && (
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500">
                          <Check className="h-4 w-4 text-navy-950" />
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </StepPanel>
          )}

          {step === 3 && (
            <StepPanel key="step3">
              <h4 className="mb-4 font-display text-base font-bold text-navy-900">
                Trip details
              </h4>
              <div className="space-y-4">
                <Field label="Travel Date" icon={Calendar}>
                  <input
                    type="date"
                    value={form.travelDate}
                    onChange={(e) => update('travelDate', e.target.value)}
                    className="input-premium"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </Field>
                <Field label="Passengers" icon={Users}>
                  <select
                    value={form.passengers}
                    onChange={(e) => update('passengers', Number(e.target.value))}
                    className="input-premium"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Floor Access" icon={MapPin}>
                  <select
                    value={form.floor}
                    onChange={(e) => update('floor', e.target.value)}
                    className="input-premium"
                  >
                    {FLOOR_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </StepPanel>
          )}

          {step === 4 && estimate && (
            <StepPanel key="step4">
              <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-5 text-white sm:p-6">
                <p className="text-sm text-navy-400">Estimated Total Fare</p>
                <p className="font-display text-3xl font-bold text-brand-400 sm:text-4xl">
                  {formatCurrency(estimate.fare)}
                </p>
                <p className="mt-1 text-sm text-navy-300">
                  {form.from} → {form.to}
                  {form.tripType === 'roundtrip' ? ' · Round Trip' : ''}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
                  <MiniStat label="Distance" value={`${estimate.distance} km`} />
                  <MiniStat label="Duration" value={estimate.travelTime} />
                  <MiniStat label="Vehicle" value={vehicle.name} className="col-span-2 sm:col-span-1" />
                </div>
              </div>

              <div className="mb-5 space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                <InfoCard title="Vehicle Info">
                  <InfoRow label="Base Fare" value={`${formatCurrency(vehicle.baseFare)}/km`} />
                  <InfoRow label="Driver Bata" value={formatCurrency(vehicle.driverBata)} />
                </InfoCard>
                <InfoCard title="Trip Info">
                  <InfoRow label="Date" value={form.travelDate} />
                  <InfoRow label="Passengers" value={String(form.passengers)} />
                </InfoCard>
              </div>

              {ESTIMATE_DISCLAIMERS.map((note) => (
                <p key={note} className="mb-4 flex items-start gap-2 text-xs text-navy-500">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  {note}
                </p>
              ))}

              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="font-display text-sm font-bold text-navy-900">Your Details</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="input-premium"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="input-premium"
                  required
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="input-premium"
                />

                {submitted ? (
                  <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
                    <Check className="mt-0.5 h-5 w-5 shrink-0" />
                    Booking confirmed! We&apos;ll call you at {form.phone} shortly.
                  </div>
                ) : (
                  <Button type="submit" variant="secondary" className="h-12 w-full" size="lg">
                    Confirm Booking
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                )}
              </form>

              <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50/80 p-3 text-[11px] leading-relaxed text-amber-900">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span><strong>Note:</strong> {BOOKING_NOTE}</span>
              </p>
            </StepPanel>
          )}
        </AnimatePresence>

        {step < 4 && (
          <div className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-5 sm:mt-6 sm:pt-6">
            {step > 1 ? (
              <Button type="button" variant="outline" className="h-12 flex-1 sm:flex-none" onClick={back}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            ) : (
              <div className="hidden sm:block sm:w-20" />
            )}
            <Button
              type="button"
              className="h-12 flex-[2] sm:flex-none"
              onClick={next}
              disabled={!canProceed()}
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="mt-4 border-t border-navy-100 pt-4">
            <Button type="button" variant="ghost" className="h-11" onClick={back}>
              <ArrowLeft className="h-4 w-4" />
              Edit Details
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function StepPanel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-500">
        <Icon className="h-3.5 w-3.5 text-brand-500" />
        {label}
      </label>
      {children}
    </div>
  )
}

function MiniStat({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={className}>
      <p className="text-[10px] uppercase tracking-wider text-navy-500">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-navy-50/50 p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-500">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2 text-sm">
      <span className="text-navy-500">{label}</span>
      <span className="text-right font-medium text-navy-900">{value}</span>
    </div>
  )
}
