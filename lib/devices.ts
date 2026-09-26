export type Device = { name: string; kind: "tv" | "box" | "phone" | "apple" | "monitor" | "laptop"; description: string };

export const devices: Device[] = [
  { name: "Smart TV", kind: "tv", description: "A simple, big-screen living-room setup." },
  { name: "Android TV", kind: "box", description: "A streamlined experience for Android TV devices." },
  { name: "Fire TV", kind: "box", description: "Bring your authorized subscription to Fire TV." },
  { name: "Android Phone", kind: "phone", description: "Take your entertainment with you." },
  { name: "iPhone / iPad", kind: "apple", description: "An elegant mobile viewing experience." },
  { name: "Windows", kind: "monitor", description: "Enjoy FreeGoTV from your desktop." },
  { name: "macOS", kind: "laptop", description: "A polished setup for your Mac." },
];
