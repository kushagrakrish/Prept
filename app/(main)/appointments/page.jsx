import { getIntervieweeAppointments } from "@/actions/appointments";
import AppointmentCard from "@/components/AppointmentCard";
import PageHeader from "@/components/reusables";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default async function AppointmentsPage() {
  const appointments = await getIntervieweeAppointments();
  const now = new Date();
  const scheduledAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "SCHEDULED" && appointment.startTime > now,
  );

  const pastAppointments = appointments.filter(
    (appointment) => appointment.status === "COMPLETED",
  );

  return (
    <main className='min-h-screen bg-black'>
      {/* ── Page header ── */}
      <PageHeader
        label='My appointments'
        gray='Your interview'
        gold='sessions'
        description='All your upcoming and past mock interviews in one place.'
      />

      <div className='max-w-6xl mx-auto px-8 lg:px-0 py-8 flex flex-col gap-14'>
        {/* ── Empty state ── */}
        {appointments.length === 0 && (
          <div className='flex flex-col items-center justify-center py-28 gap-5 text-center'>
            <span className='w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-3xl'>
              <CalendarDays size={28} className='text-violet-400' />
            </span>
            <div>
              <p className='text-base text-stone-400 font-light'>
                No sessions booked yet.
              </p>
              <p className='text-sm text-stone-600 mt-1'>
                Browse expert interviewers and book your first session.
              </p>
            </div>
            <Button variant='gold' asChild>
              <Link href='/explore'>Browse interviewers →</Link>
            </Button>
          </div>
        )}

        {/* ── Upcoming ── */}
        {scheduledAppointments.length > 0 && (
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
              <p className='text-xs font-semibold text-stone-500 tracking-widest uppercase'>
                Upcoming ({scheduledAppointments.length})
              </p>
              <div className='flex-1 h-px bg-white/5' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              {scheduledAppointments.map((b) => (
                <AppointmentCard key={b.id} booking={b} mode='interviewee' />
              ))}
            </div>
          </div>
        )}

        {/* ── Past ── */}
        {pastAppointments.length > 0 && (
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
              <p className='text-xs font-semibold text-stone-500 tracking-widest uppercase'>
                Past ({pastAppointments.length})
              </p>
              <div className='flex-1 h-px bg-white/5' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              {pastAppointments.map((b) => (
                <AppointmentCard
                  key={b.id}
                  booking={b}
                  mode='interviewee'
                  isPast={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
