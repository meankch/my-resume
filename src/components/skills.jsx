import React, { Component } from "react";
import {} from "../styles/skills.css";
import ProgrammingCard from "../components/skills/programming";
import Stack from "@mui/material/Stack";
import FrameworkCard from "./skills/framework";
import DatabaseCard from "./skills/database";
import OrchestrationCard from "./skills/orchestration";
import CloudPlatformCard from "./skills/cloud-platform";
import ProjectManagementCard from "./skills/project-management";
import CiCdCard from "./skills/ci-cd";
import MessageQueueCard from "./skills/message-queue";
import ApiManagementCard from "./skills/api-management";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-section">
        <section id="skills" data-section="skills">
          <h2>Skills</h2>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            style={{ padding: 5 }}
          >
            <ProgrammingCard></ProgrammingCard>
            <FrameworkCard></FrameworkCard>
            <DatabaseCard></DatabaseCard>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            style={{ padding: 5 }}
          >
            <OrchestrationCard></OrchestrationCard>
            <CloudPlatformCard></CloudPlatformCard>
            <ProjectManagementCard></ProjectManagementCard>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            style={{ padding: 5 }}
          >
            <CiCdCard></CiCdCard>
            <MessageQueueCard></MessageQueueCard>
            <ApiManagementCard></ApiManagementCard>
          </Stack>
        </section>
      </div>
    );
  }
}
