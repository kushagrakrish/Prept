import { db } from "./lib/prisma.js";

async function main() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        clerkUserId: true,
        name: true,
        role: true,
      }
    });
    console.log("USERS:", JSON.stringify(users, null, 2));

    const bookings = await db.booking.findMany({
      include: {
        interviewer: true,
        interviewee: true,
      }
    });
    console.log("BOOKINGS:", JSON.stringify(bookings, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    process.exit(0);
  }
}

main();
