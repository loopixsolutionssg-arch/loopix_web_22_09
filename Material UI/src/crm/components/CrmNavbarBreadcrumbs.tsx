"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CrmNavbarBreadcrumbs() {
  const pathname = (typeof window !== "undefined" ? window.location.pathname : "/") || "/";
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      separator={<NavigateNextRoundedIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 1 }}
    >
      <Link
        href="/"
        underline="hover"
        color="inherit"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <HomeRoundedIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to} color="text.primary">
            {capitalizeFirstLetter(value)}
          </Typography>
        ) : (
          <Link
            href={to}
            underline="hover"
            color="inherit"
            key={to}
          >
            {capitalizeFirstLetter(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
