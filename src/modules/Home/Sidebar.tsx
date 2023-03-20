import { Box, GridItem, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import BroadmapIcon from "../../components/layouts/Logos/Broadmap";
import { HELP_CENTER } from "../../data/DocLinks";
import { BROADMAP_HOMEPAGE, DISCORD_INVITE } from "../../data/RefLinks";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  const workspace = [
    {
      title: "Настройки",
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
          <SidebarSection sectionTitle="Меню" items={workspace} />
        </VStack>
      </Box>
    </GridItem>
  );
};

export default Sidebar;
