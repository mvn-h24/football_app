export interface ResourceMetaList {
  count: number;
}
export interface RmlWithFilter extends ResourceMetaList {
  filter: object;
}

export interface RmlWithFilters extends ResourceMetaList {
  filters: object;
}
