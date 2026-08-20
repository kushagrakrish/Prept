import { getInterviewer } from "@/actions/explore";
import { notFound } from "next/navigation";
import { checkUser } from "@/lib/checkUser";
import InterviewerProfileClient from "@/components/InterviewerProfileClient";

export default async function InterviewerPage({ params }) {
  const { id } = await params;
  const interviewer = await getInterviewer(id);

  if (!interviewer) {
    notFound();
  }

  const dbUser = await checkUser();

  return (
    <InterviewerProfileClient
      interviewer={interviewer}
      dbUser={dbUser}
    />
  );
}
