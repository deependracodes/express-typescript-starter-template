import z from "zod";

export const pingSchema = z.object({ 
     message : z.string().nonempty("Message cannot be empty").min(3, "Message must be at least 3 characters long")
})