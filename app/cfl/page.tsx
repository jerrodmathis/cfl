"use client";
import React from "react";
import { ModeToggle } from "../components/mode-toggle";
import { Avatar, Box, Option, Select, Sheet, Typography } from "@mui/joy";
import { Header } from "./components/header";
import { Body } from "./components/body";

import { useUser } from "./api/get-user";
import { useAvatar } from "./api/avatars";
import { useLeague } from "./api/leagues";

type RecapYear = "2023" | "2024" | "2025";

export default function CFL() {
  // const { data: user } = useUser("jmat52");
  // const { data: avatar } = useAvatar(user?.avatar ?? "", "regular");
  // const avatarSrcUrl = avatar ? URL.createObjectURL(avatar) : undefined;
  const { data: league } = useLeague(process.env.SLEEPER_LEAGUE_ID);
  const { data: leagueAvatar } = useAvatar(league?.avatar ?? "", "regular");
  const leagueAvatarSrc = leagueAvatar
    ? URL.createObjectURL(leagueAvatar)
    : undefined;

  const [recapYear, setRecapYear] = React.useState<RecapYear>("2025");

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Sheet
          variant="plain"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: "1 1 40",
            p: 2,
          }}
        >
          <Typography
            level="h2"
            component="h1"
            startDecorator={
              <Avatar alt="CFL" src={leagueAvatarSrc} sx={{ height: 40 }} />
            }
          >
            CFL Yearly Recap
          </Typography>
          <Select defaultValue={recapYear}>
            <Option value="2025">2025</Option>
            <Option value="2024">2024</Option>
            <Option value="2023">2023</Option>
          </Select>
          {/* <Avatar
            alt={user?.display_name ?? ""}
            src={avatarSrcUrl}
            sx={{ height: "40px" }}
          /> */}
        </Sheet>
      </Box>
    </>
  );
}
