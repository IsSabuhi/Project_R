

export interface SectionHints {
  title: string;
  content: Array<{ type: "p" | "ul"; body: Array<string> | string }>;
}
