export interface Education {
  yearTitle?: string;
  jobItems?:  { [key: string]: JobItem };
}

export interface JobItem {
  title?:       string;
  description?: string;
}
