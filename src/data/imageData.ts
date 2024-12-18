import {
  Loader2,
  Home,
  User,
  Settings,
  Bell,
  Search,
  Heart,
  Star,
  Camera,
  Cloud,
  Lock,
  Unlock,
  Trash,
  Edit,
  Save,
  Download,
  Upload,
  Folder,
  File,
  Music,
  Video,
  Phone,
  Mail,
  Calendar,
  Map,
  Globe,
  ShoppingCart,
  CreditCard,
  Gift,
  Tag,
  Bookmark,
  Share,
  Link,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Battery,
  Wifi,
  Bluetooth,
  Car,
  Train,
  Bus,
  Flower,
  Leaf,
  Mountain,
  Wind,
  Thermometer,
  Compass,
  Clock,
  Timer,
  BellOff,
  Volume,
  VolumeOff,
  Headphones,
  Speaker,
  Laptop,
  Tablet,
  Printer,
  CameraOff,
  Film,
  Play,
  Pause,
  FastForward,
  Rewind,
  Shuffle,
  Repeat,
  Power,
  Plug,
  Lightbulb,
  Magnet,
  Key,
  Shield,
  ShieldOff,
  LockOpen,
} from "lucide-react";

export type IconType = React.ComponentType<{ size?: number; color?: string }>;

interface IconData {
  Icon: IconType;
  name: string;
  codeSnippet: string;
}

const generateCodeSnippet = (
  componentName: string
) => `import { ${componentName} } from 'lucide-react';

const App = () => {
  return (
    <${componentName} />
  );
};

export default App;
`;

export const imageData: IconData[] = [
  {
    Icon: Loader2,
    name: "Loader",
    codeSnippet: generateCodeSnippet("Loader2"),
  },
  { Icon: Home, name: "Home", codeSnippet: generateCodeSnippet("Home") },
  { Icon: User, name: "User", codeSnippet: generateCodeSnippet("User") },
  {
    Icon: Settings,
    name: "Settings",
    codeSnippet: generateCodeSnippet("Settings"),
  },
  { Icon: Bell, name: "Bell", codeSnippet: generateCodeSnippet("Bell") },
  { Icon: Search, name: "Search", codeSnippet: generateCodeSnippet("Search") },
  { Icon: Heart, name: "Heart", codeSnippet: generateCodeSnippet("Heart") },
  { Icon: Star, name: "Star", codeSnippet: generateCodeSnippet("Star") },
  { Icon: Camera, name: "Camera", codeSnippet: generateCodeSnippet("Camera") },
  { Icon: Cloud, name: "Cloud", codeSnippet: generateCodeSnippet("Cloud") },
  { Icon: Lock, name: "Lock", codeSnippet: generateCodeSnippet("Lock") },
  { Icon: Unlock, name: "Unlock", codeSnippet: generateCodeSnippet("Unlock") },
  { Icon: Trash, name: "Trash", codeSnippet: generateCodeSnippet("Trash") },
  { Icon: Edit, name: "Edit", codeSnippet: generateCodeSnippet("Edit") },
  { Icon: Save, name: "Save", codeSnippet: generateCodeSnippet("Save") },
  {
    Icon: Download,
    name: "Download",
    codeSnippet: generateCodeSnippet("Download"),
  },
  { Icon: Upload, name: "Upload", codeSnippet: generateCodeSnippet("Upload") },
  { Icon: Folder, name: "Folder", codeSnippet: generateCodeSnippet("Folder") },
  { Icon: File, name: "File", codeSnippet: generateCodeSnippet("File") },
  { Icon: Music, name: "Music", codeSnippet: generateCodeSnippet("Music") },
  { Icon: Video, name: "Video", codeSnippet: generateCodeSnippet("Video") },
  { Icon: Phone, name: "Phone", codeSnippet: generateCodeSnippet("Phone") },
  { Icon: Mail, name: "Mail", codeSnippet: generateCodeSnippet("Mail") },
  {
    Icon: Calendar,
    name: "Calendar",
    codeSnippet: generateCodeSnippet("Calendar"),
  },
  { Icon: Map, name: "Map", codeSnippet: generateCodeSnippet("Map") },
  { Icon: Globe, name: "Globe", codeSnippet: generateCodeSnippet("Globe") },
  {
    Icon: ShoppingCart,
    name: "ShoppingCart",
    codeSnippet: generateCodeSnippet("ShoppingCart"),
  },
  {
    Icon: CreditCard,
    name: "CreditCard",
    codeSnippet: generateCodeSnippet("CreditCard"),
  },
  { Icon: Gift, name: "Gift", codeSnippet: generateCodeSnippet("Gift") },
  { Icon: Tag, name: "Tag", codeSnippet: generateCodeSnippet("Tag") },
  {
    Icon: Bookmark,
    name: "Bookmark",
    codeSnippet: generateCodeSnippet("Bookmark"),
  },

  { Icon: Share, name: "Share", codeSnippet: generateCodeSnippet("Share") },
  { Icon: Link, name: "Link", codeSnippet: generateCodeSnippet("Link") },
  { Icon: Eye, name: "Eye", codeSnippet: generateCodeSnippet("Eye") },
  { Icon: EyeOff, name: "EyeOff", codeSnippet: generateCodeSnippet("EyeOff") },
  { Icon: Sun, name: "Sun", codeSnippet: generateCodeSnippet("Sun") },
  { Icon: Moon, name: "Moon", codeSnippet: generateCodeSnippet("Moon") },
  {
    Icon: Battery,
    name: "Battery",
    codeSnippet: generateCodeSnippet("Battery"),
  },
  { Icon: Wifi, name: "Wifi", codeSnippet: generateCodeSnippet("Wifi") },
  {
    Icon: Bluetooth,
    name: "Bluetooth",
    codeSnippet: generateCodeSnippet("Bluetooth"),
  },

  { Icon: Car, name: "Car", codeSnippet: generateCodeSnippet("Car") },
  { Icon: Train, name: "Train", codeSnippet: generateCodeSnippet("Train") },
  { Icon: Bus, name: "Bus", codeSnippet: generateCodeSnippet("Bus") },
  { Icon: Flower, name: "Flower", codeSnippet: generateCodeSnippet("Flower") },
  { Icon: Leaf, name: "Leaf", codeSnippet: generateCodeSnippet("Leaf") },
  {
    Icon: Mountain,
    name: "Mountain",
    codeSnippet: generateCodeSnippet("Mountain"),
  },
  { Icon: Wind, name: "Wind", codeSnippet: generateCodeSnippet("Wind") },
  {
    Icon: Thermometer,
    name: "Thermometer",
    codeSnippet: generateCodeSnippet("Thermometer"),
  },
  {
    Icon: Compass,
    name: "Compass",
    codeSnippet: generateCodeSnippet("Compass"),
  },
  { Icon: Clock, name: "Clock", codeSnippet: generateCodeSnippet("Clock") },
  { Icon: Timer, name: "Timer", codeSnippet: generateCodeSnippet("Timer") },
  {
    Icon: BellOff,
    name: "BellOff",
    codeSnippet: generateCodeSnippet("BellOff"),
  },
  { Icon: Volume, name: "Volume", codeSnippet: generateCodeSnippet("Volume") },
  {
    Icon: VolumeOff,
    name: "VolumeOff",
    codeSnippet: generateCodeSnippet("VolumeOff"),
  },
  {
    Icon: Headphones,
    name: "Headphones",
    codeSnippet: generateCodeSnippet("Headphones"),
  },
  {
    Icon: Speaker,
    name: "Speaker",
    codeSnippet: generateCodeSnippet("Speaker"),
  },
  { Icon: Laptop, name: "Laptop", codeSnippet: generateCodeSnippet("Laptop") },
  { Icon: Tablet, name: "Tablet", codeSnippet: generateCodeSnippet("Tablet") },
  {
    Icon: Printer,
    name: "Printer",
    codeSnippet: generateCodeSnippet("Printer"),
  },
  {
    Icon: CameraOff,
    name: "CameraOff",
    codeSnippet: generateCodeSnippet("CameraOff"),
  },
  { Icon: Film, name: "Film", codeSnippet: generateCodeSnippet("Film") },
  { Icon: Play, name: "Play", codeSnippet: generateCodeSnippet("Play") },
  { Icon: Pause, name: "Pause", codeSnippet: generateCodeSnippet("Pause") },
  {
    Icon: FastForward,
    name: "FastForward",
    codeSnippet: generateCodeSnippet("FastForward"),
  },
  { Icon: Rewind, name: "Rewind", codeSnippet: generateCodeSnippet("Rewind") },
  {
    Icon: Shuffle,
    name: "Shuffle",
    codeSnippet: generateCodeSnippet("Shuffle"),
  },
  { Icon: Repeat, name: "Repeat", codeSnippet: generateCodeSnippet("Repeat") },
  { Icon: Power, name: "Power", codeSnippet: generateCodeSnippet("Power") },
  { Icon: Plug, name: "Plug", codeSnippet: generateCodeSnippet("Plug") },
  {
    Icon: Lightbulb,
    name: "Lightbulb",
    codeSnippet: generateCodeSnippet("Lightbulb"),
  },
  { Icon: Magnet, name: "Magnet", codeSnippet: generateCodeSnippet("Magnet") },
  { Icon: Key, name: "Key", codeSnippet: generateCodeSnippet("Key") },
  { Icon: Shield, name: "Shield", codeSnippet: generateCodeSnippet("Shield") },
  {
    Icon: ShieldOff,
    name: "ShieldOff",
    codeSnippet: generateCodeSnippet("ShieldOff"),
  },
  {
    Icon: LockOpen,
    name: "LockOpen",
    codeSnippet: generateCodeSnippet("LockOpen"),
  },
];
