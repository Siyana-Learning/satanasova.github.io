export type Project = {
  url: string;
  src: string;
  description: ProjectDescription;
  showFrame?: boolean;
  responsive?: boolean
}

export type ProjectDescription = {
  title: string;
  usedTech: string[];
  descriptionText: string;
}


export class DeviceType {
  static readonly PHONE = new DeviceType('phone', 390, 720);
  static readonly TABLET = new DeviceType('tablet', 750, 1024);
  static readonly LAPTOP = new DeviceType('laptop', 1280, 720);
  constructor(public name: string, public width: number, public height: number) {}
}

