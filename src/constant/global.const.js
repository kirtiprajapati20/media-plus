import { RoutePaths } from "@routes/RouterPaths";
import PublicIcon from "@mui/icons-material/Public";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined"
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

export const globalConstant = {
  BASE_URL: "",

  HEADER_ACTIVE_TITLE: [
    {
      title: "Dashboard",
      path: RoutePaths.dashboardPath,
    },
    {
      title: "Add Slider",
      path: RoutePaths.sliderPath,
    },
    {
      title: "Add Category",
      path: RoutePaths.categoryPath,
    },
    {
      title: "Shop By Use",
      path: RoutePaths.shopByUsePath,
    },
    {
      title: "Product List",
      path: RoutePaths.productPath,
    },
    {
      title: "Add Product",
      path: RoutePaths.addProductPath,
    },
    {
      title: "Edit Product",
      path: RoutePaths.editProductPath,
    },
    {
      title: "Product Details",
      path: RoutePaths.editProductPath,
    },
    {
      title: "Shop By Look",
      path: RoutePaths.shopByLookPath,
    },
    {
      title: "Shop By Finish",
      path: RoutePaths.shopByFinishPath,
    },
    {
      title: "Shop By Color",
      path: RoutePaths.shopByColorPath,
    },
    {
      title: "Sizes",
      path: RoutePaths.sizesPath,
    },
    {
      title: "User",
      path: RoutePaths.userPath,
    },
    {
      title: "Profile",
      path: "user",
    },
  ],
  MENU_LIST: [
    // {
    //   title: "Dashboard",
    //   icon: BarChartRoundedIcon,
    //   path: RoutePaths?.dashboardPath,
    //   roles: ["Admin", "Editor", "Manager", "Viewer"],
    // },
    // {
    //   title: "Landing Pages",
    //   icon: LayersOutlinedIcon,
    //   path: RoutePaths?.landingPagePath,
    //   roles: ["Admin", "Editor", "Manager", "Viewer"],
    // },
    // {
    //   title: "Analytics",
    //   icon: TimelineIcon,
    //   path: RoutePaths.analyticsPath,
    //   roles: ["Admin", "Editor", "Manager", "Viewer"],
    // },
    // {
    //   title: "Master",
    //   icon: CategoryOutlinedIcon,
    //   roles: ["Admin"],
    //   children: [
    //     {
    //       title: "Colors",
    //       icon: InvertColorsSharpIcon,
    //       path: RoutePaths?.colorPath,
    //     },
    //     {
    //       title: "Fonts",
    //       icon: SortByAlphaIcon,
    //       path: RoutePaths?.fontlistPath,
    //     },
    //     {
    //       title: "FavIcons",
    //       icon: StarIcon,
    //       path: RoutePaths?.faviconlistPath,
    //     },
    //     {
    //       title: "Users",
    //       icon: PersonOutlineIcon,
    //       path: RoutePaths?.userlistPath,
    //     },
    //     {
    //       title: "Work Space",
    //       icon: WorkspacesIcon,
    //       path: RoutePaths?.workspacePath,
    //     },
    //     {
    //       title: "Template",
    //       icon: DynamicFeedOutlinedIcon,
    //       path: RoutePaths?.templatePath,
    //     },
    //     {
    //       title: "Block",
    //       icon: AddBoxOutlinedIcon,
    //       path: RoutePaths?.blockPath,
    //     },
    //   ],
    // },
  ],

  WORKSPACE_SETTING_MENU_LIST: [

    {
      title: "Team Member",
      icon: GroupsOutlinedIcon,
      path: RoutePaths?.workspaceTeamMember,
    },

    {
      title: "Domains",
      icon: PublicIcon,
      path: RoutePaths?.workspaceDomain,
    },
  ],
  ACCOUNT_ADMIN_MENU_LIST: [
    {
      title: "Account Setting",
      icon: PersonOutlineIcon,
      path: RoutePaths?.accountSettingPath,
    },

    {
      title: "Subscription",
      icon: CreditCardOutlinedIcon,
      path: RoutePaths?.workspaceTeamMember,
    },
    {
      title: "Update Plan",
      icon: StarOutlineOutlinedIcon,
      path: RoutePaths?.workspaceTeamMember,
    },
  ],
  schedulingButtonList: [
    { label: "When I Update", value: "manual" },
    { label: "At Specific Time and date", value: "automate" },
  ],
  schedulingUnpublishButtonList: [
    { label: "When I Unpublish", value: "manual" },
    { label: "At Specific Time and date", value: "automate" },
  ],
  IS_AUTH_SCREEN: "auth",
  LOGOUT: "Logout",
  PROFILE: "profile",
  USER: "user",
  Auth: "auth",
  RESETPASSWORD: "resetpassword",
  PRIVACYPOLICY: "privacypolicy",
  EditGroupName: "editGroupName",
  AMPLandingPAge: "AMPLandingPAge",
};
