"use client";

import { Link, Sheet, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Sheet
      variant="plain"
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography level="h2" component="h1">
        Jerrod&apos;s Projects
      </Typography>
      <Typography level="h4" endDecorator={<Link href="/login">Login</Link>} />
      <Typography
        level="h4"
        endDecorator={<Link href="/sign-up">Sign up</Link>}
      />
      <Typography
        level="h4"
        endDecorator={<Link href="/cfl">CFL Statistics</Link>}
      />
    </Sheet>
  );
}
