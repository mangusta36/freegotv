export type Channel = { name: string; country: string; category: string; description: string };

export const channelCategories = ["All", "Sports", "News", "Entertainment", "Movies", "Kids", "Documentary", "Music"];

export const demoChannels: Channel[] = [
  { name: "Aurora Sports", country: "United Kingdom", category: "Sports", description: "Live sports magazine and original analysis." },
  { name: "Northstar News", country: "United States", category: "News", description: "Round-the-clock world and local updates." },
  { name: "CineVista", country: "Spain", category: "Movies", description: "Licensed movie showcases and interviews." },
  { name: "Junior Junction", country: "Canada", category: "Kids", description: "Family-friendly series and learning blocks." },
  { name: "Atlas Culture", country: "Morocco", category: "Documentary", description: "Stories, travel and culture from around the world." },
  { name: "Studio 9", country: "France", category: "Entertainment", description: "Original talk, lifestyle and comedy programming." },
  { name: "Soundwave", country: "Germany", category: "Music", description: "Concerts, new releases and music documentaries." },
  { name: "Lusitânia Now", country: "Portugal", category: "News", description: "Portuguese national and international coverage." },
  { name: "Italia Scene", country: "Italy", category: "Entertainment", description: "Italian culture, food and lifestyle programming." },
  { name: "Lowlands Live", country: "Netherlands", category: "Sports", description: "Sports highlights and regional events." },
  { name: "Maple Docs", country: "Canada", category: "Documentary", description: "Nature, science and Canadian stories." },
  { name: "Belgian Beat", country: "Belgium", category: "Music", description: "Music sessions and festival coverage." },
];
