export interface WidgetModel {
  gcc?: string;
  id: number;
  lcc?: string;
  position: number;
  title?: string;
  type: string;
  config?: {
    actionUrl: string;
    contentUrl: string;
    imageUrl: string;
    quickLinkItems?: IQuickLinksModel[];
  };
}

export interface IQuickLinksModel {
  name: string;
  url: string;
}
