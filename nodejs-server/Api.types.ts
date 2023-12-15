export interface ICity {
    "region": string,
    "population": string,
    "descriptionFromReview": string,
    "image": string,
    "name": string,
    "latitude": string,
    "longitude": string,
    "country": string,
    long_slug: string,
    "country_code": string,
    "internet_speed": number,
    "air_quality_score": number,
    "humidity": string,
    "rank": number,
    "weather_emoji": "🌥",
    "temperatureC": string,
    "cost_for_nomad_in_usd": number,
    "cost_for_expat_in_usd": number,
    "cost_for_local_in_usd": number,
    "cost_for_family_in_usd": number,
    "total_score": number,
    "overall_score": number,
    "cost_score": number,
    "internet_score": number,
    "leisure_quality": string,
    "safety_level": number
}

export type ICityPreview = Pick<ICity, 'name' | 'country_code' | 'rank' | 'cost_for_nomad_in_usd' | 'descriptionFromReview' | 'long_slug' | 'country' | 'region'>;

export interface IApi {
    getAll: () => ICityPreview[];
    getOne: (cityName: string) => ICity;
}
