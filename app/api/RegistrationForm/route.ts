import connectDB from "../../utils/database";
// @ts-expect-error TS(2305): Module '"../../utils/schemaModels"' has no exporte... Remove this comment to see the full error message
import { RegistrationModel, EventModel, NotificationModel } from "../../utils/schemaModels";

export async function POST(req: any, res: any) {
    const { eventId, name, contact } = await req.json();
    await connectDB();

    try {
        // Save the registration
        const registration = new RegistrationModel({ eventId, name, contact });
        await registration.save();

        // Find the event and organizer's email
        const event = await EventModel.findById(eventId);
        if (!event) {
            throw new Error("Event not found");
        }
        const organizerEmail = event.email;

        // Create a notification for the organizer
        const notification = new NotificationModel({
            email: organizerEmail,
            message: `${name} has registered for your event "${event.title}". Contact: ${contact}`
        });
        await notification.save();

        return new Response(JSON.stringify({ message: "Registration successful" }), { status: 200 });
    } catch (error) {
        console.error("Error during registration:", error);
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return new Response(JSON.stringify({ message: "Registration failed", error: error.message }), { status: 500 });
    }
}
