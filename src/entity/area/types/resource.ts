export interface AreaListingResponse {
  count: number;
  filters: Filters;
  areas: AreaListingItem[];
}

export interface AreaListingItem {
  id: number;
  name: string;
  countryCode: string;
  flag?: string;
  parentAreaId?: number;
  parentArea?: string;
}

interface Filters {}

export interface AreaDetail {
  id: number;
  name: string;
  code: string;
  flag?: any;
  parentAreaId: number;
  parentArea: string;
  childAreas: AreaListingItem[];
}
