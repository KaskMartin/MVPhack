export interface CountryData {
  iso2: string,
  iso3a: number,
  data?: {
    [year: string]: {
      immigrationTo: {
        [countryCode: string]: ?number,
      }
      [dataPoint: DataPointType]: ?number,
    }
  }
}

export type DataPointType = 'gdp' | 'crop' | 'ara' | 'emigrants' | 'immigrationTo';