export type Project = {
  src: string;
  description: ProjectDescription;
  active?: boolean,
  showFrame?: boolean
}

export type ProjectDescription = {
  title: string;
  usedTools: string[];
  descriptionText: string;
}