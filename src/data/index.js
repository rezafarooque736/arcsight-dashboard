import { GlobeLockIcon, LayoutDashboardIcon, TicketIcon } from "lucide-react";

export const sideBarContent = [
  {
    title: "Web Application Security",
    href: "/",
    icon: LayoutDashboardIcon,
    variant: "default",
  },
  {
    title: "Suspicious AddressList",
    href: "/suspicious-address-list",
    icon: GlobeLockIcon,
    variant: "ghost",
  },
  {
    title: "HPSM Ticketing Tool",
    href: "/hpsm-ticketing-tool",
    icon: TicketIcon,
    variant: "ghost",
  },
];
export const assigneeList = [
  { label: "saurav.a-dcsupport", value: "saurav.a-dcsupport" },
  { label: "l1supportggndc", value: "l1supportggndc" },
  { label: "kashika-socsupport", value: "kashika-socsupport" },
  { label: "hemilton-socsupport", value: "hemilton-socsupport" },
  { label: "dinesh-socsupport", value: "dinesh-socsupport" },
  { label: "navtej-socsupport", value: "navtej-socsupport" },
  { label: "undefined", value: "undefined" },
  { label: "anujgupta-socsupport", value: "anujgupta-socsupport" },
  { label: "gaurav-dcsupport", value: "gaurav-dcsupport" },
  { label: "amar-dcsupport", value: "amar-dcsupport" },
];

export const regionList = [
  { label: "CO", value: "CO" },
  { label: "WR", value: "WR" },
];

export const serviceList = [{ label: "SOC Services", value: "SOC Services" }];

export const serviceTypeList = [
  { label: "WAF Security Event", value: "WAF Security Event" },
  { label: "OS Security", value: "OS Security" },
  { label: "OS Security", value: "OS Security" },
  { label: "Antivirus Related", value: "Antivirus Related" },
  { label: "NCCC", value: "NCCC" },
  { label: "DoT", value: "DoT" },
  { label: "CERT-in", value: "CERT-in" },
  { label: "Cyber Cell", value: "Cyber Cell" },
  { label: "Server SSL Certificates", value: "Server SSL Certificates" },
];

export const subServiceList = [
  { label: "Web Application Security", value: "Web Application Security" },
  { label: "End Point Security", value: "End Point Security" },
  {
    label: "Vulnerability Management / Reports",
    value: "Vulnerability Management / Reports",
  },
  { label: "Compliance", value: "Compliance" },
  {
    label: "Incident (LEA / Externally Reported)",
    value: "Incident (LEA / Externally Reported)",
  },
];

export const priorityList = [
  { label: "Critical", colorValue: "bg-red-500", value: "1" },
  { label: "High", colorValue: "bg-yellow-500", value: "2" },
  { label: "Average", colorValue: "bg-green-500", value: "3" },
  { label: "Low", colorValue: "bg-slate-500", value: "4" },
  { label: "SR", colorValue: "bg-black", value: "5" },
];
