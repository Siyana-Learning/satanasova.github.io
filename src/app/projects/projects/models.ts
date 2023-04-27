export type Project = {
  src: string;
  description: ProjectDescription;
  showFrame?: boolean,
}

export type ProjectDescription = {
  title: string;
  usedTools: string[];
  descriptionText: string;
}