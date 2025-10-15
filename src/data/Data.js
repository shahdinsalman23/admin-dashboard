import { BiSolidDashboard, BiBarChartAlt2, BiUser, BiBox, BiShoppingBag, BiMessageDots, BiStar, BiCog, BiSupport, BiCalendar, BiFile, BiBell, BiCreditCard, BiArchive, BiStore, BiGridAlt,
  BiChart, BiWallet, BiLayer, BiUserCircle, BiDollarCircle, BiLineChart, BiUserPlus } from "react-icons/bi";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Inventory from "../pages/Inventory";
import Suppliers from "../pages/Suppliers";
import Transactions from "../pages/Transactions";
import Invoices from "../pages/Invoices";
import Payments from "../pages/Payments";
import MediaLibrary from "../pages/MediaLibrary";
import ContentManagement from "../pages/ContentManagement";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import ReviewsFeedback from "../pages/ReviewsFeedback";
import Calendar from "../pages/Calendar";
import FileManager from "../pages/FileManager";
import ProfileSettings from "../pages/ProfileSettings";
import GeneralSettings from "../pages/GeneralSettings";
import HelpSupport from "../pages/HelpSupport";



export const sidebarData = [
  {
    heading: "Main",
    items: [
      { id: 1, title: "Dashboard", icon: BiSolidDashboard, path: "/dashboard", component: Dashboard },
      { id: 2, title: "Analytics", icon: BiBarChartAlt2, path: "/analytics", component: Analytics },
      { id: 3, title: "Reports", icon: BiChart, path: "/reports", component: Reports },
    ],
  },
  {
    heading: "Management",
    items: [
      { id: 4, title: "Users", icon: BiUser, path: "/users", component: Users },
      { id: 5, title: "Products", icon: BiBox, path: "/products", component: Products },
      { id: 6, title: "Orders", icon: BiShoppingBag, path: "/orders", component: Orders },
      { id: 7, title: "Inventory", icon: BiArchive, path: "/inventory", component: Inventory },
      { id: 8, title: "Suppliers", icon: BiStore, path: "/suppliers", component: Suppliers },
    ],
  },
  {
    heading: "Financial",
    items: [
      { id: 9, title: "Transactions", icon: BiCreditCard, path: "/transactions", component: Transactions },
      { id: 10, title: "Invoices", icon: BiFile, path: "/invoices", component: Invoices },
      { id: 11, title: "Payments", icon: BiWallet, path: "/payments", component: Payments },
    ],
  },
  {
    heading: "Content & Media",
    items: [
      { id: 12, title: "Media Library", icon: BiGridAlt, path: "/media", component: MediaLibrary },
      { id: 13, title: "Content Management", icon: BiLayer, path: "/content", component: ContentManagement },
    ],
  },
  {
    heading: "Communication",
    items: [
      { id: 14, title: "Messages", icon: BiMessageDots, path: "/messages", component: Messages },
      { id: 15, title: "Notifications", icon: BiBell, path: "/notifications", component: Notifications },
      { id: 16, title: "Reviews & Feedback", icon: BiStar, path: "/reviews", component: ReviewsFeedback },
    ],
  },
  {
    heading: "Tools",
    items: [
      { id: 17, title: "Calendar", icon: BiCalendar, path: "/calendar", component: Calendar },
      { id: 18, title: "File Manager", icon: BiFile, path: "/files", component: FileManager },
    ],
  },
  {
    heading: "Account",
    items: [
      { id: 19, title: "Profile Settings", icon: BiUserCircle, path: "/profilesetting", component: ProfileSettings },
      { id: 20, title: "General Settings", icon: BiCog, path: "/settings", component: GeneralSettings },
    ],
  },
  {
    heading: "Support",
    items: [
      { id: 21, title: "Help & Support", icon: BiSupport, path: "/support", component: HelpSupport },
    ],
  },
];




export const summaryCards = [
  {
    id: 1,
    title: "Total Sales",
    value: "$85,000",
    change: "+12%",
    trend: "up", // ya "down"
    icon: BiDollarCircle,
  },
  {
    id: 2,
    title: "Revenue",
    value: "$45,300",
    change: "+8%",
    trend: "up",
    icon: BiLineChart,
  },
  {
    id: 3,
    title: "Active Users",
    value: "12,450",
    change: "-3%",
    trend: "down",
    icon: BiUser,
  },
  {
    id: 4,
    title: "New Signups",
    value: "1,250",
    change: "+18%",
    trend: "up",
    icon: BiUserPlus,
  },
];




export const dashboardData = {
  sales: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "2025 Sales ($)",
        data: [12000, 15000, 14000, 18000, 22000, 20000, 25000],
        borderColor: "#4F46E5", 
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4, 
      },
      {
        label: "2024 Sales ($)",
        data: [8000, 10000, 9500, 12000, 15000, 14000, 17000],
        borderColor: "#10B981", 
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.4,
      },
    ],
  },

  
  revenue: {
    labels: ["Product A", "Product B", "Product C", "Subscriptions", "Services"],
    datasets: [
      {
        label: "Revenue Share",
        data: [35000, 20000, 15000, 25000, 10000],
        backgroundColor: [
          "#6366F1", // Indigo
          "#F59E0B", // Amber
          "#10B981", // Green
          "#EF4444", // Red
          "#3B82F6", // Blue
        ],
        borderWidth: 1,
      },
    ],
  },

  activeUsers: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [120, 190, 150, 200, 170, 220, 250],
        backgroundColor: "#3B82F6",
      },
      {
        label: "New Signups",
        data: [30, 50, 40, 60, 45, 70, 80],
        backgroundColor: "#10B981",
      },
    ],
  },

  performance: {
    labels: ["Speed", "Scalability", "Security", "UI/UX", "Integration"],
    datasets: [
      {
        label: "This Year",
        data: [80, 70, 85, 90, 75],
        backgroundColor: "rgba(59,130,246,0.3)",
        borderColor: "#3B82F6",
        pointBackgroundColor: "#3B82F6",
      },
      {
        label: "Last Year",
        data: [60, 65, 70, 80, 60],
        backgroundColor: "rgba(16,185,129,0.3)",
        borderColor: "#10B981",
        pointBackgroundColor: "#10B981",
      },
    ],
  },

  growth: {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Growth % by Region",
        data: [35, 25, 20, 10, 8],
        backgroundColor: [
          "#6366F1",
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#3B82F6",
        ],
      },
    ],
  },
};




export const ordersData = [
  { id: "ORD-1001", customer: "John Doe", date: "2025-09-12", amount: "$250.00", status: "Delivered" },
  { id: "ORD-1002", customer: "Jane Smith", date: "2025-09-11", amount: "$180.00", status: "Pending" },
  { id: "ORD-1003", customer: "Michael Johnson", date: "2025-09-10", amount: "$90.00", status: "Cancelled" },
  { id: "ORD-1004", customer: "Emily Davis", date: "2025-09-09", amount: "$320.00", status: "Processing" },
  { id: "ORD-1005", customer: "Daniel Wilson", date: "2025-09-08", amount: "$145.00", status: "Delivered" },
  { id: "ORD-1006", customer: "Sophia Brown", date: "2025-09-08", amount: "$280.00", status: "Pending" },
  { id: "ORD-1007", customer: "James Miller", date: "2025-09-07", amount: "$75.00", status: "Cancelled" },
  { id: "ORD-1008", customer: "Olivia Martinez", date: "2025-09-07", amount: "$400.00", status: "Delivered" },
  { id: "ORD-1009", customer: "Ethan Taylor", date: "2025-09-06", amount: "$195.00", status: "Processing" },
  { id: "ORD-1010", customer: "Ava Anderson", date: "2025-09-06", amount: "$220.00", status: "Delivered" },
  { id: "ORD-1011", customer: "William Thomas", date: "2025-09-05", amount: "$310.00", status: "Pending" },
  { id: "ORD-1012", customer: "Mia Hernandez", date: "2025-09-05", amount: "$95.00", status: "Cancelled" },
  { id: "ORD-1013", customer: "Alexander Lee", date: "2025-09-04", amount: "$260.00", status: "Delivered" },
  { id: "ORD-1014", customer: "Isabella Moore", date: "2025-09-04", amount: "$175.00", status: "Processing" },
  { id: "ORD-1015", customer: "Benjamin Clark", date: "2025-09-03", amount: "$340.00", status: "Delivered" },
  { id: "ORD-1016", customer: "Charlotte Lewis", date: "2025-09-03", amount: "$130.00", status: "Pending" },
  { id: "ORD-1017", customer: "Henry Walker", date: "2025-09-02", amount: "$480.00", status: "Delivered" },
  { id: "ORD-1018", customer: "Amelia Hall", date: "2025-09-02", amount: "$210.00", status: "Cancelled" },
  { id: "ORD-1019", customer: "Lucas Allen", date: "2025-09-01", amount: "$85.00", status: "Pending" },
  { id: "ORD-1020", customer: "Harper Young", date: "2025-09-01", amount: "$365.00", status: "Delivered" },
  { id: "ORD-1021", customer: "Jack King", date: "2025-09-12", amount: "$150.00", status: "Processing" },
  { id: "ORD-1022", customer: "Ella Scott", date: "2025-09-11", amount: "$200.00", status: "Delivered" },
  { id: "ORD-1023", customer: "Matthew Green", date: "2025-09-10", amount: "$490.00", status: "Pending" },
  { id: "ORD-1024", customer: "Abigail Adams", date: "2025-09-09", amount: "$125.00", status: "Delivered" },
  { id: "ORD-1025", customer: "David Baker", date: "2025-09-08", amount: "$275.00", status: "Cancelled" },
  { id: "ORD-1026", customer: "Chloe Nelson", date: "2025-09-08", amount: "$160.00", status: "Processing" },
  { id: "ORD-1027", customer: "Joseph Carter", date: "2025-09-07", amount: "$220.00", status: "Delivered" },
  { id: "ORD-1028", customer: "Avery Perez", date: "2025-09-07", amount: "$300.00", status: "Pending" },
  { id: "ORD-1029", customer: "Samuel Roberts", date: "2025-09-06", amount: "$100.00", status: "Delivered" },
  { id: "ORD-1030", customer: "Scarlett Turner", date: "2025-09-06", amount: "$350.00", status: "Cancelled" },
  { id: "ORD-1031", customer: "Owen Phillips", date: "2025-09-05", amount: "$285.00", status: "Processing" },
  { id: "ORD-1032", customer: "Grace Campbell", date: "2025-09-05", amount: "$420.00", status: "Delivered" },
  { id: "ORD-1033", customer: "Logan Mitchell", date: "2025-09-04", amount: "$155.00", status: "Pending" },
  { id: "ORD-1034", customer: "Aria Evans", date: "2025-09-04", amount: "$265.00", status: "Delivered" },
  { id: "ORD-1035", customer: "Mason Edwards", date: "2025-09-03", amount: "$310.00", status: "Cancelled" },
  { id: "ORD-1036", customer: "Lily Collins", date: "2025-09-03", amount: "$140.00", status: "Delivered" },
  { id: "ORD-1037", customer: "Elijah Stewart", date: "2025-09-02", amount: "$230.00", status: "Processing" },
  { id: "ORD-1038", customer: "Zoe Sanchez", date: "2025-09-02", amount: "$180.00", status: "Delivered" },
  { id: "ORD-1039", customer: "Jacob Morris", date: "2025-09-01", amount: "$370.00", status: "Pending" },
  { id: "ORD-1040", customer: "Victoria Rogers", date: "2025-09-01", amount: "$95.00", status: "Delivered" },
  { id: "ORD-1041", customer: "Carter Reed", date: "2025-09-12", amount: "$160.00", status: "Delivered" },
  { id: "ORD-1042", customer: "Penelope Cook", date: "2025-09-11", amount: "$200.00", status: "Processing" },
  { id: "ORD-1043", customer: "Wyatt Bell", date: "2025-09-10", amount: "$310.00", status: "Pending" },
  { id: "ORD-1044", customer: "Layla Murphy", date: "2025-09-09", amount: "$440.00", status: "Delivered" },
  { id: "ORD-1045", customer: "Dylan Bailey", date: "2025-09-08", amount: "$180.00", status: "Cancelled" },
  { id: "ORD-1046", customer: "Hannah Rivera", date: "2025-09-08", amount: "$260.00", status: "Delivered" },
  { id: "ORD-1047", customer: "Luke Cooper", date: "2025-09-07", amount: "$150.00", status: "Pending" },
  { id: "ORD-1048", customer: "Nora Richardson", date: "2025-09-07", amount: "$390.00", status: "Delivered" },
  { id: "ORD-1049", customer: "Sebastian Cox", date: "2025-09-06", amount: "$205.00", status: "Processing" },
  { id: "ORD-1050", customer: "Ella Gray", date: "2025-09-06", amount: "$310.00", status: "Delivered" },
];
