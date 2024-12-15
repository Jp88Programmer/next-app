import { Loader2, Home, User, Settings, Bell } from "lucide-react";

export type IconType = React.ComponentType<{ size?: number; color?: string }>;

interface IconData {
  Icon: IconType;
  name: string;
  usecase: string;
}

export const imageData: IconData[] = [
  { Icon: Loader2, name: "loader", usecase: "use to loading information" },
  { Icon: Home, name: "home", usecase: "use to navigate to home" },
  { Icon: User, name: "user", usecase: "use to represent user profile" },
  { Icon: Settings, name: "settings", usecase: "use to configure settings" },
  { Icon: Bell, name: "bell", usecase: "use to show notifications" },
];
