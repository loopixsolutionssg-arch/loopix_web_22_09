import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CrmDashboard from "./crm/CrmDashboard";
import LoopixLanding from "./loopix/LoopixLanding";
import PortfolioPage from "./loopix/pages/PortfolioPage";
import ProjectStartupDashboard from "./loopix/pages/ProjectStartupDashboard";
import ProjectTuitionCentre from "./loopix/pages/ProjectTuitionCentre";
import ProjectRestaurant from "./loopix/pages/ProjectRestaurant";
import ProjectClinicIntake from "./loopix/pages/ProjectClinicIntake";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        404: Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for doesn't exist or has been moved.
      </Typography>
    </Box>
  );
}

import ErrorBoundary from "./error/ErrorBoundary";
import GlobalErrorListener from "./error/GlobalErrorListener";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline enableColorScheme />
        <GlobalErrorListener />
        <Routes>
          <Route path="/" element={<LoopixLanding />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/startup" element={<ProjectStartupDashboard />} />
          <Route path="/portfolio/tuition" element={<ProjectTuitionCentre />} />
          <Route path="/portfolio/restaurant" element={<ProjectRestaurant />} />
          <Route path="/portfolio/clinic" element={<ProjectClinicIntake />} />
          <Route path="/crm/*" element={<CrmDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
