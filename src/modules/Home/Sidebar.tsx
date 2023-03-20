

import { Box, GridItem, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import BroadmapIcon from "../../components/layouts/Logos/Broadmap";
import { HELP_CENTER } from "../../data/DocLinks";
import { BROADMAP_HOMEPAGE, DISCORD_INVITE } from "../../data/RefLinks";
import SidebarSection from "./SidebarSection";
import SponsorCard from "./SponsorCard";

const Sidebar = () => {
  const workspace = [
    {
      title: "Settings",
      icon: FiSettings,
      link: "/settings"
    }
    // {
    //   title: "Favorites",
    //   icon: FiStar,
    //   link: "",
    // },
    // {
    //   title: "Templates",
    //   icon: FiCopy,
    //   link: "", // /templates
    // },
    // {
    //   title: "Quick Share",
    //   icon: FiShare2,
    //   link: "", // /share
    // },
  ];

  const resources = [
    {
      title: "Broadmap",
      icon: BroadmapIcon,
      link: BROADMAP_HOMEPAGE
    },
    {
      title: "Help & Support",
      icon: FiHelpCircle,
      link: HELP_CENTER // /support
    },
    {
      title: "Discord Server",
      icon: FaDiscord,
      link: DISCORD_INVITE // /support
    }
  ];

  return (
    <GridItem colSpan={1}>
      <Box
        alignItems="flex-start"
        flexDir="column"
        display="flex"
        height="100%"
        width="100%"
        aria-label="section"
        // pr={{ base: "2rem" }}
      >
        <VStack
          alignItems="flex-start"
          spacing="0"
          color={useColorModeValue("gray.600", "whiteAlpha")}
          width="100%"
          mb="4"
        >
          <SidebarSection sectionTitle="Workspace" items={workspace} />
          <SidebarSection sectionTitle="Resources" items={resources} />
        </VStack>
        <SponsorCard />
      </Box>
    </GridItem>
  );
};

export default Sidebar;
