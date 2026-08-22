import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PageHeader from "@/components/reusables";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getAvailability,
  getInterviewerAppointments,
  getInterviewerStats,
  getWithdrawalHistory,
} from "@/actions/dashboard";
import { ClipboardList, Clock, Wallet } from "lucide-react";
import { getCurrentUser } from "@/actions/user";
import AppointmentsSection from "@/components/AppointmentsSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import EarningsSection from "@/components/EarningsSection";

export default async function InterviewerDashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/");

  const dbUser = await getCurrentUser();

  const [availability, appointments, stats, withdrawalHistory] =
    await Promise.all([
      getAvailability(),
      getInterviewerAppointments(),
      getInterviewerStats(),

      // Assignment
      getWithdrawalHistory(),
    ]);

  return (
    <main className='min-h-screen bg-black'>
      {/* Page header */}
      <PageHeader
        label='Interviewer dashboard'
        gray='Welcome back,'
        gold={dbUser.name?.split(" ")[0] ?? "Interviewer"}
        description={
          dbUser.title && dbUser.company
            ? `${dbUser.title} · ${dbUser.company}`
            : undefined
        }
        right={
          <div>
            <p className='text-xs text-stone-600'>Credit balance</p>
            <p className='font-serif text-3xl leading-none bg-linear-to-br from-violet-300 to-violet-500 bg-clip-text text-transparent text-right'>
              {stats?.creditBalance ?? 0}
            </p>
          </div>
        }
      />

      {/* Tabbed content */}
      <div className='max-w-6xl mx-auto px-8 py-10'>
        <Tabs defaultValue='earnings'>
          <TabsList className='bg-[#0f0f11] border border-white/10 mb-8 w-full h-auto group-data-horizontal/tabs:h-auto p-1.5'>
            <TabsTrigger value='earnings' className='py-3 px-5'>
              <Wallet size={16} className='text-violet-400' /> Earnings
            </TabsTrigger>
            <TabsTrigger value='appointments' className='py-3 px-5'>
              <ClipboardList size={18} className='text-violet-400' />{" "}
              Appointments
            </TabsTrigger>
            <TabsTrigger value='availability' className='py-3 px-5'>
              <Clock size={18} className='text-violet-400' /> Availability
            </TabsTrigger>
          </TabsList>

          <TabsContent value='appointments'>
            <AppointmentsSection appointments={appointments} />
          </TabsContent>

          <TabsContent value='availability'>
            <AvailabilitySection initial={availability} />
          </TabsContent>

          <TabsContent value='earnings'>
            <EarningsSection stats={stats} history={withdrawalHistory} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
