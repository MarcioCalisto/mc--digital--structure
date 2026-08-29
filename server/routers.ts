import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { contactInput, getRequestSource, sendContactEmail } from "./contact";
import { insertContact } from "./db";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(contactInput)
      .mutation(async ({ input, ctx }) => {
        const result = await sendContactEmail(input, getRequestSource(ctx.req));
        if (result.code === "SPAM_ACCEPTED") return result;

        // O registro permanece como backup operacional quando o e-mail ainda não está configurado.
        await insertContact({
          name: input.name,
          email: input.email,
          projectType: input.projectType,
          message: input.message,
          status: result.success ? "sent" : "pending",
        });
        return result;
      }),
  }),
});

export type AppRouter = typeof appRouter;
