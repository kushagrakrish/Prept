import { getInterviewer } from "@/actions/explore";
import PageHeader from "@/components/reusables";
import { notFound } from "next/navigation";

export default async function InterviewerPage({ params }) {
  const { id } = await params;
  const interviewer = await getInterviewer(id);

  if (!interviewer) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-black text-stone-100'>
      <PageHeader
        label='Interviewer Profile'
        gold={interviewer.name}
        description={
          interviewer.title && interviewer.company
            ? `${interviewer.title} at ${interviewer.company}`
            : interviewer.title || interviewer.company || ""
        }
      />
    </main>
  );
}
